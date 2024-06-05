import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import UserDetails from "./components/UserDetails";
import IsPublicLayout from "./components/IsPublicLayout";
import IsPrivateLayout from "./components/IsPrivateLayout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import OrganizationEdit from "./components/OrganizationEdit";
import OrganizationHomepage from "./pages/OrganizationHomepage";
import UserHomepage from "./pages/UserHomepage";
import MissionDetails from "./components/MissionDetails";
import MissionEdit from "./components/MissionEdit";
import DetailsOrg from "./pages/DetailsOrg";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route Component={IsPublicLayout}>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route Component={IsPrivateLayout}>
          <Route
            path="/organizations/:orgId/details"
            element={<DetailsOrg />}
          />
          <Route
            path="/organizations/:orgId"
            element={<OrganizationHomepage />}
          />
          <Route
            path="/organizations/:orgId/details/:missionId"
            element={<MissionDetails />}
          />
          <Route path="/missions/:missionId/edit" Component={MissionEdit} />
          <Route path="/users/home" element={<UserHomepage />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route
            path="/organizations/:orgId/edit"
            Component={OrganizationEdit}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
