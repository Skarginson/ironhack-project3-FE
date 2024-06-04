import styles from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
    </nav>
  );
}

export default Sidebar;
