import { useState } from "react";
import MissionsList from "../components/MissionsList";
import NewMissionForm from "../components/NewMissionForm";
import useMissions from "../hooks/useMissions";
import styles from "../styles/MissionsSection.module.css";

const MissionsSection = ({ orgId }) => {
  const [showForm, setShowForm] = useState(false);

  const { missions, loading, error, refetchMissions } = useMissions(orgId);

  const handleNewMissionClick = () => {
    setShowForm(true);
  };

  const handleMissionCreated = () => {
    setShowForm(false);
    refetchMissions();
  };

  if (loading) return <p>Loading missions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <button
        className={styles.newMissionButton}
        onClick={handleNewMissionClick}
      >
        New Mission
      </button>
      {showForm ? (
        <div className="form-overlay">
          <NewMissionForm
            orgId={orgId}
            onMissionCreated={handleMissionCreated}
          />
        </div>
      ) : (
        <MissionsList missions={missions} />
      )}
    </div>
  );
};

export default MissionsSection;
