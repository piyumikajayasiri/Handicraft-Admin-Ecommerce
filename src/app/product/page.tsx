import Link from "next/link";
import React from "react";

export default function ProductList() {
  const products = [
    "Batik Blouse",
    "Batik Blouse",
    "Batik Blouse",
    "Batik Blouse",
    "Batik Blouse",
    "Batik Blouse",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Product</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="p-3">{product}</td>
              <td className="p-3 flex space-x-2">
                <button className="bg-red-200 text-red-800 px-4 py-2 rounded">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          href="./product-form"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Add New Product
        </Link>
      </div>
    </div>
  );
}
