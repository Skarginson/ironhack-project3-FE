import { Link } from "react-router-dom";
import styles from "../styles/MissionsList.module.css";
import MissionCard from "./MissionCard";

const MissionList = ({ missions }) => {
  return (
    <div className={styles.container}>
      <h2>Current Missions</h2>
      <ul>
        {missions.map((mission) => (
          <Link
            to={`/organizations/${mission.organization._id}/details/${mission._id}`}
            state={{ mission }}
            key={mission._id}
          >
            <MissionCard mission={mission} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
