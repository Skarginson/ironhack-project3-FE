import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

const NewPostForm = ({ orgId, missionId, onPostCreated }) => {
  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    image: "",
    organization: orgId || "",
    mission: missionId || "",
  });

  const { title, content, image } = postDetails;

  function handleChange(e) {
    const { name, value } = e.target;
    setPostDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/posts`, {
        ...postDetails,
        organization: orgId,
        mission: missionId,
      });
      console.log("Post created:", response.data);
      setPostDetails({
        title: "",
        content: "",
        image: "",
        organization: orgId || "",
        mission: missionId || "",
      });
      onPostCreated();
    } catch (error) {
      console.error("Erreur lors de la création du post:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Content:
        <textarea name="content" value={content} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" name="image" value={image} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPostForm;
