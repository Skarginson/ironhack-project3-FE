import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../consts";

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
      await axios.put(`${API_BASE_URL}/organizations/${orgId}`, organization);
      navigate(`/organizations/${orgId}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Edit Organization</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
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
            <textarea
              name="description"
              value={organization.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Identification:
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
