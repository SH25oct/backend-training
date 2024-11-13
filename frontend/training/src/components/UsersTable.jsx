import React, { useEffect, useState } from "react";
import UserEditModal from "./UserEditModal";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch a single user by ID
  const fetchOneUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/users/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await response.json();
      setSelectedUser(data); 
      setIsModalOpen(true); 
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    fetchOneUser(user.id); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto p-4 w-[100vw]">
      <h2 className="text-lg font-semibold mb-4">Users Table</h2>
      <table className="w-[100%] bg-white border border-black">
        <thead>
          <tr>
            <th className="px-2 py-2 border-b">ID</th>
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
                <td className="px-2 py-2 border-b">{user.id}</td>
                <td className="px-2 py-2 border-b">{user.first_name}</td>
                <td className="px-2 py-2 border-b">{user.last_name}</td>
                <td className="px-2 py-2 border-b">{user.email}</td>
                <td className="px-2 py-2 border-b">{user.gender}</td>
                <td className="px-2 py-2 border-b">{user.job_title}</td>
                <td className="px-2 py-2 border-b grid grid-cols-2">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
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

      {/* Render the UserEditModal if modal is open */}
      {isModalOpen && (
        <UserEditModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default UsersTable;
