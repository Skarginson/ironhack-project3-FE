import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/organizations/`);
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
      <h1>Organizations</h1>
      <ul>
        {organizations.map((org) => (
          <li key={org.name}>{org.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationsList;
