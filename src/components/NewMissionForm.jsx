import { useState } from "react";
import { API_BASE_URL } from "../consts";
import MissionForm from "./MissionForm";
import apiHandler from "../utils/apiHandler";

const NewMissionForm = ({ orgId, onMissionCreated }) => {
  const [missionDetails, setMissionDetails] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    organization: orgId,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setMissionDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await apiHandler.api.post(`${API_BASE_URL}/missions`, {
        ...missionDetails,
        organization: orgId,
      });
      console.log("Mission created:", response.data);
      setMissionDetails({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        organization: orgId,
      });
      onMissionCreated();
    } catch (error) {
      console.error("Error creating mission:", error);
    }
  }

  return (
    <>
      <h2>Create New Mission</h2>
      <MissionForm
        mission={missionDetails}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default NewMissionForm;
