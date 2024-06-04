import logoPlaceHolder from "../assets/logo-placeholder.jpg";
import { Link } from "react-router-dom";
import styles from "../styles/OrganizationsDetails.module.css";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function OrganizationDetails({ organization }) {
  const { user } = useContext(AuthContext);

  console.log(user, "OrganizationDetails", organization);
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
        {user?.identification && user._id === organization._id && (
          <Link to={`/organizations/${organization._id}/edit`}>Edit</Link>
        )}
      </div>
    </div>
  );
}

export default OrganizationDetails;
