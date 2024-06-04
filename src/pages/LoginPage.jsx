import { useState, useContext } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";
import { AuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

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
      const response = await axios.post(
        `${API_BASE_URL}/login?accountType=${formData.accountType}`,
        formData
      );
      updateToken(response.data.authToken);

      const id = response.data._id;
      if (formData.accountType === "organization") {
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
      <Header />
      <Sidebar />
      <div className="pico">
        <h1>Login</h1>
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
      <Footer />
    </>
  );
}

export default LoginPage;
