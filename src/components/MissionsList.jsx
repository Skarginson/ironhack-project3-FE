import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const MissionsList = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/missions`);
        setMissions(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading missions: {error.message}</p>;

  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {missions.map((mission) => (
          <li key={mission.name}>
            <h2>{mission.name}</h2>
            <p>{mission.description}</p>
            <p>Start Date: {mission.startDate}</p>
            <p>End Date: {mission.endDate}</p>
            <p>
              Organization:{" "}
              {mission.organization ? mission.organization.name : "N/A"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionsList;
