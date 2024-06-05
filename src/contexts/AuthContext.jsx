import { createContext, useEffect, useState } from "react";
import apiHandler from "../utils/apiHandler";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [isLoading, setIsLoading] = useState(false);

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  function updateToken(token, accountType) {
    if (token) {
      localStorage.setItem("authToken", token);
      localStorage.setItem("accountType", accountType);
    } else {
      localStorage.clear();
    }

    setAuthToken(token);
  }

  // const logout = () => {
  //   localStorage.removeItem("authToken");
  // };

  async function getUser() {
    if (!authToken) {
      if (user) {
        setUser(null);
      }

      return;
    }

    try {
      setIsLoading(true);
      const response = await apiHandler.getUser();
      setUser(response.data);
    } catch (error) {
      updateToken(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ user, updateToken, isLoading, updateUser, refetchUser: getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
