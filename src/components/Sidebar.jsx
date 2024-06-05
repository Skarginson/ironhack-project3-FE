import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Link to="/users/home">users/home</Link>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
    </nav>
  );
}

export default Sidebar;
