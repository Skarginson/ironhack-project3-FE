import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import OrganizationsList from "../components/OrganizationsList";
import PostsList from "../components/PostsList";

function Homepage() {
  return (
    <>
      <Header />
      <Sidebar />
      <>
        <h1>This'll be the first homepage without login </h1>
      </>
      <OrganizationsList />
      <PostsList />
      <Footer />
    </>
  );
}

export default Homepage;
