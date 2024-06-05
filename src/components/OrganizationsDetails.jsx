import logoPlaceHolder from "../assets/logo-placeholder.jpg";
import { Link } from "react-router-dom";
import styles from "../styles/OrganizationsDetails.module.css";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

function OrganizationDetails({ organization }) {
  const { user } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleFollow = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/follow`, {
        userId: user._id,
        organizationId: organization._id,
      });

      if (response.status === 200) {
        alert("Organization followed");
      } else {
        alert("Failed to follow organization");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDonate = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/donate`, {
        userId: user._id,
        organizationId: organization._id,
        amount,
        startDate,
      });

      if (response.status === 200) {
        alert("Donation made");
      } else {
        alert("Failed to make donation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      <button onClick={handleFollow}>Follow</button>
      <div>
        <h2>Donate</h2>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <button onClick={handleDonate}>Donate</button>
      </div>
    </div>
  );
}

export default OrganizationDetails;
