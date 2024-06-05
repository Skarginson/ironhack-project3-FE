import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function IsPublicLayout() {
  const { user } = useContext(AuthContext);
  const accountType = localStorage.getItem("accountType");
  if (user) {
    return (
      <Navigate
        to={
          accountType === "organization"
            ? `/organizations/${user._id}`
            : `/users/home`
        }
      />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default IsPublicLayout;
