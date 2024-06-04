import { API_BASE_URL } from "../consts";
import axios from "axios";

function MissionCard({ mission }) {
  const handleDelete = async () => {
    await axios.delete(`${API_BASE_URL}/characters/${mission._id}`);
  };
  return (
    <div className="homeCard">
      <h3>{mission.name}</h3>
      <p>{mission.description}</p>
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default MissionCard;
