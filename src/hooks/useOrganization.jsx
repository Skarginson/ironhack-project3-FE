import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const useOrganization = (orgId) => {
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/organizations/${orgId}`
        );
        setOrganization(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchOrganization();
  }, [orgId]);

  return { organization, loading, error };
};

export default useOrganization;
