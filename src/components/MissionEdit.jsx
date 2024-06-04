import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../consts";

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
        const response = await axios.get(
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
      await axios.put(`${API_BASE_URL}/missions/${missionId}`, mission);
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={mission.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={mission.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={mission.startDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={mission.endDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default MissionEdit;
