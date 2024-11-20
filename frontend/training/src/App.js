import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/UsersSlice";
import UsersTable from "./components/UsersTable";
import AddUserModal from "./components/AddUserModal";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div className="flex items-end justify-end">
        <button
          onClick={openModal}
          className="bg-blue-500 p-2 rounded-md mt-2 mr-2 text-white font-bold hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* Handle loading and error states */}
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-red-500">Error fetching users: {error}</p>
      ) : (
        <UsersTable />
      )}

      {/* Add User Modal */}
      {isModalOpen && <AddUserModal onClose={closeModal} />}
    </div>
  );
};

export default App;
