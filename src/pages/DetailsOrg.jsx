import OrganizationDetails from "../components/OrganizationsDetails";
import { useParams } from "react-router-dom";
import useOrganization from "../hooks/useOrganization";

function DetailsOrg() {
  const { orgId } = useParams();
  const { organization, loading, error } = useOrganization(orgId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <OrganizationDetails organization={organization} />
    </>
  );
}

export default DetailsOrg;
