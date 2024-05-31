import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrganizationDetails = () => {
  const { id } = useParams();
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await axios.get(`/api/organizations/${id}`);
        setOrganization(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrganization();
  }, [id]);

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
      <p>
        <strong>Verified Date:</strong>{" "}
        {new Date(organization.verifiedDate).toLocaleDateString()}
      </p>
      {organization.image && (
        <img src={organization.image} alt={`${organization.name} logo`} />
      )}
    </div>
  );
};

export default OrganizationDetails;
