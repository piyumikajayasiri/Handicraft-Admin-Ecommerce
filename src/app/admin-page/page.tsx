"use client";
import React, { useState } from "react";

export default function AdminManagement() {
  const [admins, setAdmins] = useState([
    "Admin Google Email 1",
    "Admin Google Email 2",
    "Admin Google Email 3",
  ]);
  const [newAdmin, setNewAdmin] = useState("");

  const handleInputChange = (e: any) => {
    setNewAdmin(e.target.value);
  };

  const handleAddAdmin = () => {
    if (newAdmin) {
      setAdmins([...admins, newAdmin]);
      setNewAdmin("");
    }
  };

  const handleDelete = (index: any) => {
    const updatedAdmins = admins.filter((_, i) => i !== index);
    setAdmins(updatedAdmins);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Admins</h2>

        {/* Add New Admin Form */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add New Admin
          </label>
          <div className="flex space-x-4">
            <input
              type="email"
              value={newAdmin}
              onChange={handleInputChange}
              className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter admin email"
            />
            <button
              onClick={handleAddAdmin}
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none"
            >
              Add New Admin
            </button>
          </div>
        </div>

        {/* Admin List Table */}
        <div className="mt-8">
          <table className="min-w-full table-auto bg-gray-100 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700">
                  Admin Google Email
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-4 py-2">{admin}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
