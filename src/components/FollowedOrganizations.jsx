const FollowedOrganizations = ({ user }) => {
  const followedOrganizations = user.organizations;

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
