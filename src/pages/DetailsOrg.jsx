import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import OrganizationDetails from "../components/OrganizationsDetails";
import { useParams } from "react-router-dom";
import useOrganization from "../hooks/useOrganization";

function DetailsOrg() {
  const { orgId } = useParams();
  const organization = useOrganization(orgId);
  return (
    <>
      <Header />
      <Sidebar />
      <OrganizationDetails organization={organization} />
      <Footer />
    </>
  );
}

export default DetailsOrg;
