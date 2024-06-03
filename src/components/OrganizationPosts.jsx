import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { OrganizationContext } from "../contexts/OrganizationContext";
import { API_BASE_URL } from "../consts";

const OrganizationPosts = ({ user }) => {
  const { organizations } = useContext(OrganizationContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };
    fetchPosts();
  }, []);

  const followedOrganizations = user.organizations.map(
    (org) => org.organization
  );
  const followedPosts = posts.filter((post) =>
    followedOrganizations.includes(post.organization._id)
  );

  return (
    <div>
      <h2>Organization Posts</h2>
      <ul>
        {followedPosts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>
              <em>{post.date}</em>
            </p>
            <p>
              <strong>Organization:</strong>{" "}
              {organizations.find((o) => o._id === post.organization._id).name}
            </p>
            <p>{post.mission}</p>
            <p>{post.text.substring(0, 100)}...</p>
            <a href={`/posts/${post._id}`}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationPosts;
