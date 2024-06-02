import { useState } from "react";
import usePosts from "../hooks/usePosts";

function PostList({ orgId }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const { posts, loading, error } = usePosts(orgId, currentPage, postsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil(posts.total / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Posts</h2>
      <div className="post-list">
        {posts.data.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PostList;
