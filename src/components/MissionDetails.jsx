import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "../styles/MissionDetails.module.css";
import axios from "axios";
import { API_BASE_URL } from "../consts";

function MissionDetails() {
  const { state } = useLocation();
  const { mission } = state;
  const { orgId } = useParams();

  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/missions/${mission._id}/edit`);
  }

  const handleDelete = async () => {
    await axios.delete(`${API_BASE_URL}/missions/${mission._id}`);
    navigate(`/organizations/${orgId}`);
  };

  return (
    <div className={styles.container}>
      <h1>{mission.name}</h1>
      <p>
        <strong>Description:</strong> {mission.description}
      </p>
      <p>
        <strong>Date de début de mission:</strong> {mission.startDate}
      </p>
      <p>
        <strong>Date de fin de mission :</strong> {mission.endDate}
      </p>
      <p>{/* <strong>Organisation:</strong> {mission.organization.name} */}</p>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MissionDetails;
