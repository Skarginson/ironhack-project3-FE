import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { API_BASE_URL } from "../consts";
import apiHandler from "../utils/apiHandler";

const UserDetails = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const handleEdit = () => setEditable(true);

  const handleSave = async () => {
    try {
      const updatedUser = { ...user, name, email };
      if (password) {
        updatedUser.password = password;
      }

      await apiHandler.api.put(
        `${API_BASE_URL}/users/${user._id}`,
        updatedUser
      );

      updateUser(updatedUser);

      setEditable(false);
    } catch (error) {
      console.error("Error updating user details", error);
    }
  };
  return (
    <div>
      <h2>User Details</h2>
      <div>
        <label>Name:</label>
        {editable ? (
          <input value={name} onChange={(e) => setName(e.target.value)} />
        ) : (
          <span>{user.name}</span>
        )}
      </div>
      <div>
        <label>Email:</label>
        {editable ? (
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        ) : (
          <span>{user.email}</span>
        )}
      </div>
      {editable && (
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
      <button onClick={editable ? handleSave : handleEdit}>
        {editable ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default UserDetails;
