import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers, fetchOneUser, deleteUser, clearSelectedUser } from "../features/users/UsersSlice";
import UserEditModal from "./UserEditModal";

const UsersTable = () => {
  const dispatch = useDispatch();
  const { users, selectedUser, loading, error } = useSelector((state) => state.users);

  const handleEditClick = (user) => {
    dispatch(fetchOneUser(user.id));
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleCloseModal = () => {
    dispatch(clearSelectedUser());
  };

  const handleSave = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="container mx-auto p-4 w-[70%]">
      <h2 className="text-lg font-semibold mx-auto text-center mb-3">
        Users Table
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <table className="w-[100%] bg-white border border-black">
        <thead>
          <tr>
            <th className="px-2 py-2 border-b">First Name</th>
            <th className="px-2 py-2 border-b">Last Name</th>
            <th className="px-2 py-2 border-b">Email</th>
            <th className="px-2 py-2 border-b">Gender</th>
            <th className="px-2 py-2 border-b">Job Title</th>
            <th className="px-2 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="px-2 py-2 border-b">{user.first_name}</td>
                <td className="px-2 py-2 border-b">{user.last_name}</td>
                <td className="px-2 py-2 border-b">{user.email}</td>
                <td className="px-2 py-2 border-b">{user.gender}</td>
                <td className="px-2 py-2 border-b">{user.job_title}</td>
                <td className="px-2 py-2 border-b grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedUser && (
        <UserEditModal
          user={selectedUser}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UsersTable;