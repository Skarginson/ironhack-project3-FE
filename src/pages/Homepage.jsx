import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import OrganizationsList from "../components/OrganizationsList";

function Homepage() {
  return (
    <>
      <Header />
      <Sidebar />
      <>
        <h1>This'll be the first homepage without login </h1>
      </>
      <OrganizationsList />
      <Footer />
    </>
  );
}

export default Homepage;
