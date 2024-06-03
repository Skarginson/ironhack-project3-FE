import { useNavigate, Outlet, NavLink } from "react-router-dom";
import OrganizationDetails from "../components/OrganizationsDetails";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { OrganizationContext } from "../contexts/OrganizationContext";

const OrganizationHomepage = () => {
  const { organization, loading, error } = useContext(OrganizationContext);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/organizations/${organization._id}/edit`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(organization);

  return (
    <div>
      <Header />
      <Sidebar />
      <OrganizationDetails
        organization={organization}
        onEditClick={handleEditClick}
      />
      <nav>
        <NavLink to="missions">Missions</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default OrganizationHomepage;
