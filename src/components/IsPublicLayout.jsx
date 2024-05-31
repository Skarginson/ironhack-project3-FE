import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function IsPublicLayout() {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default IsPublicLayout;
