import styles from "../styles/MissionCard.module.css";

function MissionCard({ mission }) {
  return (
    <div className={styles.homeCard}>
      <h3>{mission.name}</h3>
      <p>{mission.description}</p>
    </div>
  );
}

export default MissionCard;
