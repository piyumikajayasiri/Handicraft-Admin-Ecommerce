"use client";
import React, { useState } from "react";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([
    { name: "Blouse", parent: "Batik Clothing" },
    { name: "Batik Blouse", parent: "Batik Blouse" },
    { name: "Batik Blouse", parent: "Batik Blouse" },
    { name: "Batik Blouse", parent: "Batik Blouse" },
    { name: "Batik Blouse", parent: "Batik Blouse" },
    { name: "Batik Blouse", parent: "Batik Blouse" },
  ]);

  const [formData, setFormData] = useState({
    categoryName: "",
    parentCategory: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleEdit = (index: any) => {
    // Handle edit logic here
    console.log("Edit category at index:", index);
  };

  const handleDelete = (index: any) => {
    // Handle delete logic here
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Create New Category
            </label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter category name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parent Category
            </label>
            <select
              name="parentCategory"
              value={formData.parentCategory}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">No parent category</option>
              <option value="Batik Clothing">Batik Clothing</option>
              <option value="Batik Blouse">Batik Blouse</option>
            </select>
          </div>

          <div>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none"
            >
              Add New Property
            </button>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <table className="min-w-full table-auto bg-gray-100 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Category Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Parent Category
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">{category.parent}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
                  >
                    Edit
                  </button>
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
  );
}
