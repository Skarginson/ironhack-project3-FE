import { useNavigate } from "react-router-dom";

function MissionCard({ mission }) {
  return (
    <div className="homeCard">
      <h3>{mission.name}</h3>
      <p>{mission.description}</p>
    </div>
  );
}

export default MissionCard;
