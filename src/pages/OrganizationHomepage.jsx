import { useParams } from "react-router-dom";
import OrganizationDetails from "../components/OrganizationsDetails";
import MissionsSection from "../components/MissionsSection";
import styles from "../styles/OrganizationHomepage.module.css";
import useOrganization from "../hooks/useOrganization";

const OrganizationHomepage = () => {
  const { orgId } = useParams();
  const { organization, loading, error } = useOrganization(orgId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <main>
        <OrganizationDetails organization={organization} />
        <MissionsSection orgId={orgId} />
      </main>
    </div>
  );
};

export default OrganizationHomepage;
