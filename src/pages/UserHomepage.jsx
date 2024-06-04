import UserDetails from "../components/UserDetails";
import FollowedOrganizations from "../components/FollowedOrganizations";
import DonatedOrganizations from "../components/DonatedOrganizations";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Homepage = () => {
  const { user, loading, error } = useContext(AuthContext);

  if (!user) {
    return <></>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(user);
  return (
    <div>
      <UserDetails user={user} />
      <FollowedOrganizations user={user} />
      <DonatedOrganizations user={user} />
    </div>
  );
};

export default Homepage;
