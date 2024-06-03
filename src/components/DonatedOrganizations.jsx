const DonatedOrganizations = ({ user }) => {
  const donatedOrganizations = user.organizations.filter(
    (org) => org.monthlyDonation.amount > 1
  );

  return (
    <div>
      <h2>Donated Organizations</h2>
      <ul>
        {donatedOrganizations.map((org) => (
          <li key={org.organization._id}>
            <a href={`/organizations/${org.organization._id}`}>
              {org.organization.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonatedOrganizations;
