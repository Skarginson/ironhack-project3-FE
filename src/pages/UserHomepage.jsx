import UserDetails from "../components/UserDetails";
import OrganizationsList from "../components/OrganizationsList";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import DonationSummary from "../components/DonationSummary";

const Homepage = () => {
  const { user, loading, error } = useContext(AuthContext);

  if (!user) {
    return <></>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(user);
  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <UserDetails user={user} />
        <OrganizationsList />
        <DonationSummary />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
