import { useState, useEffect } from "react";
import { API_BASE_URL } from "../consts";
import apiHandler from "../utils/apiHandler";

const useMissions = (orgId) => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(Date.now());

  useEffect(() => {
    if (!orgId) {
      return;
    }

    const fetchMissions = async () => {
      try {
        const response = await apiHandler.api.get(
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
