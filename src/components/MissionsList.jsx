import { Link } from "react-router-dom";
import styles from "../styles/MissionList.module.css";
import MissionCard from "./MissionCard";

const MissionList = ({ missions }) => {
  console.log(missions, "missionList");
  return (
    <div className={styles.container}>
      <h2>Current Missions</h2>
      <ul>
        {missions.map((mission) => (
          <Link to={`details/${mission._id}`} key={mission._id}>
            <MissionCard mission={mission} />
            {/* <li key={mission._id}>{mission.name}</li> */}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
