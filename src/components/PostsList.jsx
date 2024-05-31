import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts`); // Assurez-vous que l'URL correspond à votre API
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt={post.title} />}
            <p>
              Organization: {post.organization ? post.organization.name : "N/A"}
            </p>
            <p>Mission: {post.mission ? post.mission.name : "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
