import logoPlaceHolder from "../assets/logo-placeholder.jpg";
import { useNavigate } from "react-router-dom";

const OrganizationDetails = (organization) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/organizations/${organization._id}/edit`);
  };

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
