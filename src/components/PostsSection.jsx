import { useState } from "react";
import PostsList from "../components/PostsList";
import NewPostForm from "../components/NewPostForm";
import usePosts from "../hooks/usePosts";

const PostsSection = ({ orgId }) => {
  const [showForm, setShowForm] = useState(false);
  const { posts, loading, error, refetchPosts } = usePosts(orgId);

  const handleNewPostClick = () => {
    setShowForm(true);
  };

  const handlePostCreated = () => {
    setShowForm(false);
    refetchPosts();
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <button onClick={handleNewPostClick}>New Post</button>
      {showForm ? (
        <div className="form-overlay">
          <NewPostForm orgId={orgId} onPostCreated={handlePostCreated} />
        </div>
      ) : (
        <PostsList posts={posts} />
      )}
    </div>
  );
};

export default PostsSection;
