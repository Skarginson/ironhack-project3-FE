import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import logoCharityWise from "../assets/logo-charitywise.png";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logoCharityWise} alt="logo CharityWise"></img>
      </Link>
    </header>
  );
}

export default Header;
