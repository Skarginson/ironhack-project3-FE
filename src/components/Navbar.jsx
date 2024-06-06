import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { updateToken } = useContext(AuthContext);

  const handleLogout = () => {
    updateToken(null);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/signup">Signup</Link>
      <Link to="/about">About</Link>
      <button onClick={handleLogout} className={styles.linkButton}>
        LogOut
      </button>
    </nav>
  );
}

export default Navbar;
