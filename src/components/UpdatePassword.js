import axios from "axios";
import React, { useState } from "react";

const UpdatePassword = ({ token }) => {
    console.log(`from frontend ${token}`)
  const [oldPassword, setOldPassword] = useState("");
  const handleChange = (e) => {
    setOldPassword(e.target.value);
  };
  const [newPassword, setNewPassword] = useState("");
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      oldPassword,
      newPassword,
    };
    console.log(data);
    try {
      const response = await axios.post("http://localhost:3000/api/update", data, { // Update endpoint to match backend
        headers: {
          Authorization: token,
        },
      });

      if (response.data.success) {
        alert("Password updated");
      } else {
        alert("Failed to update password"); // Update error message
      }
    } catch (err) {
      console.log(err);
      alert("Failed to update password"); // Update error message
    }
  };
  return (
    <div>
      <h1>Update Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={handleNewPassword}
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
