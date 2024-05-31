import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const usePosts = (orgId) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/organizations/${orgId}/posts`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [orgId]);

  return { posts, loading, error };
};

export default usePosts;
