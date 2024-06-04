import { createContext, useEffect, useState } from "react";
import apiHandler from "../utils/apiHandler";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [isLoading, setIsLoading] = useState(false);

  function updateToken(token) {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }

    setAuthToken(token);
  }

  // const logout = () => {
  //   localStorage.removeItem("authToken");
  // };

  useEffect(() => {
    console.log("useEffecting");
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
        console.log(response.data, "response data");
        setUser(response.data);
      } catch (error) {
        updateToken(null);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user, updateToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
