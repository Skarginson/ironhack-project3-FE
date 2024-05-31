import useMissions from "../hooks/useMissions";

const MissionList = ({ orgId }) => {
  const { missions, loading, error } = useMissions(orgId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Current Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
