import { useParams, useNavigate, Outlet, NavLink } from "react-router-dom";
import OrganizationDetails from "../components/OrganizationsDetails";
import useOrganization from "../hooks/useOrganization";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const OrganizationHomepage = () => {
  const { orgId } = useParams();
  const { organization, loading, error } = useOrganization(orgId);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/organizations/${orgId}/edit`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
      <Outlet context={{ orgId }} />
      <Footer />
    </div>
  );
};

export default OrganizationHomepage;
