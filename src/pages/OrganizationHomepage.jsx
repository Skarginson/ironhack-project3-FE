import { useNavigate, useParams } from "react-router-dom";
import OrganizationDetails from "../components/OrganizationsDetails";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MissionsSection from "../components/MissionsSection";
import styles from "../styles/OrganizationHomepage.module.css";
import useOrganization from "../hooks/useOrganization";

const OrganizationHomepage = () => {
  const { orgId } = useParams();
  const { organization, loading, error } = useOrganization(orgId);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/organizations/${organization._id}/edit`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(organization);

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />
      <main>
        <OrganizationDetails
          onEditClick={handleEditClick}
          organization={organization}
        />
        <MissionsSection orgId={orgId} />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default OrganizationHomepage;
