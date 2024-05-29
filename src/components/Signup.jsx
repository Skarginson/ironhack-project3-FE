import { useState } from "react";
import axios from "axios";

const SignupComponent = ({ accountType }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    description: "",
    identification: "",
    donationLink: "",
    verifiedDate: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const url =
      accountType === "organization"
        ? "http://localhost:5000/organizations/signup"
        : "http://localhost:5000/users/signup";

    try {
      const response = await axios.post(url, formData);
      setSuccess("Signup successful!");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Signup for {accountType}</h1>
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
              placeholder="Identification"
              onChange={handleChange}
            />
            <input
              type="text"
              name="donationLink"
              placeholder="Donation Link"
              onChange={handleChange}
            />
            <input
              type="date"
              name="verifiedDate"
              placeholder="Verified Date"
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
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default SignupComponent;
