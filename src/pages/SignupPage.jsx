import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    identification: "",
    accountType: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url =
      formData.accountType === "organization"
        ? `${API_BASE_URL}/organizations/signup`
        : `${API_BASE_URL}/users/signup`;

    try {
      const response = await apiHandler.api.post(url, formData);
      const id = response.data._id;
      if (formData.accountType === "organization") {
        navigate(`/organizations/${id}`);
      } else {
        navigate("/users/home");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="pico">
        <h1>Signup for {formData.accountType}</h1>
        <form onSubmit={handleSubmit}>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="organization">Organization</option>
          </select>
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
          {formData.accountType === "organization" && (
            <>
              <input
                type="text"
                name="identification"
                placeholder="RNA Identification"
                onChange={handleChange}
              />
            </>
          )}
          <button type="submit">Signup</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default SignupPage;
