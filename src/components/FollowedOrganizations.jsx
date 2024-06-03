import { useContext } from "react";
import { OrganizationContext } from "../contexts/OrganizationContext";

const FollowedOrganizations = ({ user }) => {
  const { organizations } = useContext(OrganizationContext);

  const followedOrganizations = user.organizations.map((org) => {
    return organizations.find((o) => o._id === org.organization);
  });

  return (
    <div>
      <h2>Followed Organizations</h2>
      <ul>
        {followedOrganizations.map((org) => (
          <li key={org._id}>
            <a href={`/organizations/${org._id}`}>{org.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowedOrganizations;
