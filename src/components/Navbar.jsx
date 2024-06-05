import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/users/home">users/home</Link>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
    </nav>
  );
}

export default Navbar;
