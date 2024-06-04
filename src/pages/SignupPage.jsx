import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import styles from "../styles/Footer.module.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    identification: "",
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
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="pico">
        <h1>Signup for {accountType}</h1>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={accountType === "organization"}
            onChange={handleSwitchChange}
          />
          <span className={styles.sliderRound}>
            {accountType === "organization" ? "Organization" : "User"}
          </span>
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
      <Footer />
    </>
  );
}

export default SignupPage;
