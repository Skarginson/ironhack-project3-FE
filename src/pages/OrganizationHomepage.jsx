import { useParams, useNavigate } from "react-router-dom";
import OrganizationDetails from "../components/OrganizationsDetails";
import MissionsList from "../components/MissionsList";
import PostsList from "../components/PostsList";
import NewMissionForm from "../components/NewMissionForm";
import useOrganization from "../hooks/useOrganization";
import NewPostForm from "../components/newPostForm";
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
      <MissionsList orgId={orgId} />
      <NewMissionForm orgId={orgId} />
      <PostsList orgId={orgId} />
      <NewPostForm orgId={orgId} />
      <Footer />
    </div>
  );
};

export default OrganizationHomepage;
