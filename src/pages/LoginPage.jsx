import { useState, useContext } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginPage.module.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    accountType: "user",
  });
  const [error, setError] = useState("");
  const { updateToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await apiHandler.api.post(
        `${API_BASE_URL}/login?accountType=${formData.accountType}`,
        formData
      );
      updateToken(response.data.authToken, response.data.accountType);

      const id = response.data._id;
      if (id) {
        navigate(`/organizations/${id}`);
      } else {
        navigate("/users/home");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <div className="pico">
        <h1 className={styles.loginTitle}>Login</h1>
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
          <select name="accountType" onChange={handleChange}>
            <option value="user">User</option>
            <option value="organization">Organization</option>
          </select>
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default LoginPage;
