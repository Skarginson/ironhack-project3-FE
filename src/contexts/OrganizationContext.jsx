import React, { createContext, useState, useEffect } from "react";
import useOrganization from "../hooks/useOrganization";

const OrganizationContext = createContext();

function OrganizationContextProvider({ children, orgId }) {
  const [organization, setOrganization] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrganization() {
      setIsLoading(true);
      try {
        const { organization, error } = useOrganization(orgId);
        setOrganization(organization);
        setError(error);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (orgId) {
      fetchOrganization();
    }
  }, [orgId]);

  return (
    <OrganizationContext.Provider value={{ organization, isLoading, error }}>
      {children}
    </OrganizationContext.Provider>
  );
}

export { OrganizationContext, OrganizationContextProvider };
