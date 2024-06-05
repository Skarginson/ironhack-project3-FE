import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/signup">Signup</Link>
      <Link to="/about">About</Link>
      <Link to="/logout">LogOut</Link>
    </nav>
  );
}

export default Navbar;
