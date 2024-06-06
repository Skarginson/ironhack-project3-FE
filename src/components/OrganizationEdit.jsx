import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import styles from "../styles/OrganizationEdit.module.css";
import apiHandler from "../utils/apiHandler";

const OrganizationEdit = () => {
  const { orgId } = useParams();
  const navigate = useNavigate();
  const [organization, setOrganization] = useState({
    name: "",
    email: "",
    description: "",
    identification: "",
    donationLink: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await apiHandler.api.get(
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganization((prevOrg) => ({
      ...prevOrg,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiHandler.api.put(
        `${API_BASE_URL}/organizations/${orgId}`,
        organization
      );
      navigate(`/organizations/${orgId}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1>Edit Organization</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              value={organization.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <br />
            <input
              type="email"
              name="email"
              value={organization.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <br />
            <textarea
              name="description"
              value={organization.description}
              onChange={handleChange}
              rows="5"
              cols="35"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Identification:
            <br />
            <input
              type="text"
              name="identification"
              value={organization.identification}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Donation Link:
            <br />
            <input
              type="url"
              name="donationLink"
              value={organization.donationLink}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <br />
            <input
              type="url"
              name="image"
              value={organization.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default OrganizationEdit;
