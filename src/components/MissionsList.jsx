const MissionList = ({ missions }) => {
  return (
    <div>
      <h2>Current Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission._id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
