import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Homepage() {
  return (
    <>
      <Header />
      <Sidebar />
      <>
        <h1>This is a homepage, I swear</h1>
      </>
      <Footer />
    </>
  );
}

export default Homepage;
