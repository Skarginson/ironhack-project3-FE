import { createContext } from "react";
import useOrganization from "../hooks/useOrganization";
import { useParams } from "react-router-dom";

const OrganizationContext = createContext();

function OrganizationContextProvider({ children }) {
  const { orgId } = useParams();
  const { organization, isLoading, error } = useOrganization(orgId);

  return (
    <OrganizationContext.Provider value={{ organization, isLoading, error }}>
      {children}
    </OrganizationContext.Provider>
  );
}

export { OrganizationContext, OrganizationContextProvider };
