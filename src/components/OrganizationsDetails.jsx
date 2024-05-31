import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../consts";
import logoPlaceHolder from "../assets/logo-placeholder.jpg";
import { useNavigate } from "react-router-dom";

const OrganizationDetails = () => {
  const { orgId } = useParams();
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/organizations/${orgId}`
        );
        setOrganization(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrganization();
  }, [orgId]);

  const handleEditClick = () => {
    navigate(`/organizations/${orgId}/edit`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{organization.name}</h1>
      <p>
        <strong>Email:</strong> {organization.email}
      </p>
      <p>
        <strong>Description:</strong> {organization.description}
      </p>
      <p>
        <strong>Identification:</strong> {organization.identification}
      </p>
      <p>
        <strong>Donation Link:</strong>{" "}
        <a href={organization.donationLink}>{organization.donationLink}</a>
      </p>
      <img
        src={organization.image || logoPlaceHolder}
        alt={`${organization.name} logo`}
      />
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default OrganizationDetails;
