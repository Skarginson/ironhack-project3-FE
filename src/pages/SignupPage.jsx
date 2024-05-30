import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    description: "",
    identification: "",
    donationLink: "",
    image: "",
  });
  const [accountType, setAccountType] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = () => {
    setAccountType((prevType) =>
      prevType === "user" ? "organization" : "user"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url =
      accountType === "organization"
        ? `${API_BASE_URL}/organizations/signup`
        : `${API_BASE_URL}/users/signup`;

    try {
      const response = await axios.post(url, formData);
      navigate("/Homepage");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Signup for {accountType}</h1>
      <label>
        <input
          type="checkbox"
          checked={accountType === "organization"}
          onChange={handleSwitchChange}
        />
        {accountType === "organization" ? "Organization" : "User"}
      </label>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        {accountType === "organization" && (
          <>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
            <input
              type="text"
              name="identification"
              placeholder="RNA Identification"
              onChange={handleChange}
            />
            <input
              type="text"
              name="donationLink"
              placeholder="Donation Link"
              onChange={handleChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
            />
          </>
        )}
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SignupPage;
