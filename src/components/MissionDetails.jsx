import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/MissionDetails.module.css";
import useMissions from "../hooks/useMissions";

function MissionDetails() {
  const { orgId } = useParams;
  const navigate = useNavigate();
  const mission = useMissions(orgId);

  console.log(mission, "mission details");
  function handleEditClick() {
    // navigate(`/organizations/${mission._id}/edit`);
  }

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
        <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
}

export default MissionDetails;
