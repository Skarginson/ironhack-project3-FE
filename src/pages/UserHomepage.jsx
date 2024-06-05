import UserDetails from "../components/UserDetails";
import OrganizationsList from "../components/OrganizationsList";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import DonationSummary from "../components/DonationSummary";
import styles from "../styles/UserHomepage.module.css";

const Homepage = () => {
  const { user, loading, error } = useContext(AuthContext);

  if (!user) {
    return <></>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <UserDetails />
      <OrganizationsList />
      <DonationSummary user={user} />
    </div>
  );
};

export default Homepage;
