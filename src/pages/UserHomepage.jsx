import UserDetails from "../components/UserDetails";
import FollowedOrganizations from "../components/FollowedOrganizations";
import DonatedOrganizations from "../components/DonatedOrganizations";
import OrganizationPosts from "../components/OrganizationPosts";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Homepage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <UserDetails user={user} />
      <FollowedOrganizations user={user} />
      <DonatedOrganizations user={user} />
      <OrganizationPosts user={user} />
    </div>
  );
};

export default Homepage;
