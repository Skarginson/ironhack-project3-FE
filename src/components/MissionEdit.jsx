import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import MissionForm from "./MissionForm";
import apiHandler from "../utils/apiHandler";

const MissionEdit = () => {
  const { missionId } = useParams();
  const navigate = useNavigate();
  const [mission, setMission] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const response = await apiHandler.api.get(
          `${API_BASE_URL}/missions/${missionId}`
        );
        setMission(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMission();
  }, [missionId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMission((prevMission) => ({
      ...prevMission,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiHandler.api.put(
        `${API_BASE_URL}/missions/${missionId}`,
        mission
      );
      navigate(`/organizations/${mission.organization._id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Edit Mission</h1>
      <MissionForm
        mission={mission}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MissionEdit;
