import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../consts";

function usePosts(orgId, page = 1, postsPerPage = 5) {
  const [posts, setPosts] = useState({ data: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/posts?orgId=${orgId}&page=${page}&limit=${postsPerPage}`
      );
      const data = response.data;
      setPosts({ data, total: data.length });
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!orgId) {
      return;
    }
    fetchPosts();
  }, [orgId, page, postsPerPage]);

  return { posts, loading, error, refetchPosts: fetchPosts };
}

export default usePosts;
