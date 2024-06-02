import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const NewMissionForm = ({ orgId, onMissionCreated }) => {
  const [missionDetails, setMissionDetails] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    organization: orgId,
  });

  const { name, description, startDate, endDate } = missionDetails;

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
    <form onSubmit={handleSubmit}>
      <h2>Create New Mission</h2>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mission Start Date:
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mission End Date:
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Create Mission</button>
    </form>
  );
};

export default NewMissionForm;
