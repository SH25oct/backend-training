import React from 'react';

const UserEditModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              defaultValue={user.first_name}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              defaultValue={user.last_name}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <input
              type="text"
              defaultValue={user.gender}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              defaultValue={user.job_title}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditModal;
