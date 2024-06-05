import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/users/home">users/home</Link>
      <Link to="/signup">SignUp, par ici mamour</Link>
      <a href="#link3">Link 3</a>
    </nav>
  );
}

export default Navbar;
