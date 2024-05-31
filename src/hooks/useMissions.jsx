import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const useMissions = (orgId) => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(Date.now());

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/organizations/${orgId}/missions`
        );
        setMissions(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchMissions();
  }, [orgId, updatedAt]);

  function refetchMissions() {
    setUpdatedAt(Date.now());
  }

  return { missions, loading, error, refetchMissions };
};

export default useMissions;
