// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import DetailsOrg from "./pages/DetailsOrg";
import DetailsUser from "./pages/DetailsUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:orgId" element={<DetailsOrg />} />
        <Route path="/details/:userId" element={<DetailsUser />} />
      </Routes>
    </>
  );
}

export default App;
