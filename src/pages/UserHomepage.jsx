import { useContext } from "react";
import OrganizationsList from "../components/OrganizationsList";
import PostsList from "../components/PostsList";
import { AuthContext } from "../contexts/AuthContext";

const UserHomepage = () => {
  const { user } = useContext(AuthContext);
  console.log(AuthContext);
  console.log(user);
  return (
    <div className="user-home">
      <header>
        <h1>Welcome, {user.name}</h1>
      </header>

      <section>
        <h2>Organizations</h2>
        <OrganizationsList />
      </section>

      <section>
        <h2>Your Missions</h2>
        <PostsList />
      </section>

      <section>
        <h2>Your Profile</h2>
        <div className="profile-details">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </section>
    </div>
  );
};

export default UserHomepage;
