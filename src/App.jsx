// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import DetailsOrg from "./pages/DetailsOrg";
import DetailsUser from "./pages/DetailsUser";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import IsPublicLayout from "./components/IsPublicLayout";
import IsPrivateLayout from "./components/IsPrivateLayout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route Component={IsPublicLayout}>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route Component={IsPrivateLayout}>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:orgId" element={<DetailsOrg />} />
          <Route path="/details/:userId" element={<DetailsUser />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
