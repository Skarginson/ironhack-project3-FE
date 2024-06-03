import { useContext, useState } from "react";
import PostsList from "../components/PostsList";
import NewPostForm from "../components/NewPostForm";
import usePosts from "../hooks/usePosts";
import { OrganizationContext } from "../contexts/OrganizationContext";

const PostsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const { organization } = useContext(OrganizationContext);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const { posts, loading, error, refetchPosts } = usePosts(
    organization?._id,
    currentPage,
    postsPerPage
  );

  const handleNewPostClick = () => {
    setShowForm(true);
  };

  const handlePostCreated = () => {
    setShowForm(false);
    refetchPosts();
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log("post", posts);
  return (
    <div>
      <button onClick={handleNewPostClick}>New Post</button>
      {showForm ? (
        <div className="form-overlay">
          <NewPostForm
            orgId={organization?._id}
            onPostCreated={handlePostCreated}
          />
        </div>
      ) : (
        <PostsList {...{ posts, currentPage, setCurrentPage, postsPerPage }} />
      )}
    </div>
  );
};

export default PostsSection;
