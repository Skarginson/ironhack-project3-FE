import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts";
import { Link } from "react-router-dom";
import apiHandler from "../utils/apiHandler";

const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await apiHandler.api.get(
          `${API_BASE_URL}/organizations/`
        );
        setOrganizations(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading organizations: {error.message}</p>;

  return (
    <div>
      <h2>Organizations</h2>
      <ul>
        {organizations.map((org) => (
          <Link to={`/organizations/${org._id}/details`} key={org._id}>
            <li key={org.name}>{org.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationsList;
