import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";
import MissionForm from "./MissionForm";

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
      const response = await axios.post(`${API_BASE_URL}/missions`, {
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
