import logoPlaceHolder from "../assets/logo-placeholder.jpg";
import { useNavigate } from "react-router-dom";
import styles from "../styles/OrganizationsDetails.module.css";

function OrganizationDetails({ organization }) {
  const navigate = useNavigate();

  function handleEditClick() {
    navigate(`/organizations/${organization._id}/edit`);
  }

  return (
    <div className={styles.container}>
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
      <div>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
}

export default OrganizationDetails;
