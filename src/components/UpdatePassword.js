import axios from "axios";
import React, { useState } from "react";

const UpdatePassword = ({ token }) => {
    // console.log(`from frontend ${token}`)
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
      const response = await axios.post("http://localhost:3000/api/update", data, {
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Update Password</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handleNewPassword}
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
