import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import DetailsOrg from "./pages/DetailsOrg";
import UserDetails from "./components/UserDetails";
import IsPublicLayout from "./components/IsPublicLayout";
import IsPrivateLayout from "./components/IsPrivateLayout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import OrganizationEdit from "./components/OrganizationEdit";
import OrganizationHomepage from "./pages/OrganizationHomepage";
import MissionsSection from "./components/MissionsSection";
import PostsSection from "./components/PostsSection";
import { OrganizationContextProvider } from "./contexts/OrganizationContext";
import UserHomepage from "./pages/UserHomepage";

function App() {
  return (
    <>
      <Routes>
        <Route Component={IsPublicLayout}>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<Homepage />} />
        <Route path="/organizations/:orgId" element={<DetailsOrg />} />
        <Route
          path="/organizations/:orgId/home"
          element={
            <OrganizationContextProvider>
              <OrganizationHomepage />
            </OrganizationContextProvider>
          }
        >
          <Route path="missions" element={<MissionsSection />} />
          <Route path="posts" element={<PostsSection />} />
        </Route>
        <Route path="/users/home" element={<UserHomepage />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/organizations/:orgId/edit" Component={OrganizationEdit} />
        <Route path="*" element={<Page404 />} />
        <Route Component={IsPrivateLayout}></Route>
      </Routes>
    </>
  );
}

export default App;
