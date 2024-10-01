// src/Components/Supplier/ManagePackages.tsx

import React, { useState } from "react";
import { DashboardLayout } from "../DashboardComponents";

export const ManagePackages = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: "Himalayan Valley Adventure", price: 15000 },
    { id: 2, name: "Goa Beach Getaway", price: 12000 },
  ]);

  const handleDelete = (id: number) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Manage Your Packages</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Package Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td className="border px-4 py-2">{pkg.id}</td>
              <td className="border px-4 py-2">{pkg.name}</td>
              <td className="border px-4 py-2">{pkg.price}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleDelete(pkg.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded">
        Add New Package
      </button>
    </DashboardLayout>
  );
};
