import { useState, useEffect } from "react";

function usePosts(orgId, page = 1, postsPerPage = 5) {
  const [posts, setPosts] = useState({ data: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/posts?orgId=${orgId}&page=${page}&limit=${postsPerPage}`
        );
        const data = await response.json();
        setPosts({ data: data.posts, total: data.total });
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [orgId, page, postsPerPage]);

  return { posts, loading, error };
}

export default usePosts;
