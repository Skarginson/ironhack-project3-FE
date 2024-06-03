import { useContext, useState } from "react";
import MissionsList from "../components/MissionsList";
import NewMissionForm from "../components/NewMissionForm";
import useMissions from "../hooks/useMissions";
import { OrganizationContext } from "../contexts/OrganizationContext";

const MissionsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    organization,
    loading: loadingOrganization,
    error: errorOrganization,
  } = useContext(OrganizationContext);

  const { missions, loading, error, refetchMissions } = useMissions(
    organization?._id
  );

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
    <div>
      <button onClick={handleNewMissionClick}>New Mission</button>
      {showForm ? (
        <div className="form-overlay">
          <NewMissionForm
            orgId={organization._id}
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
