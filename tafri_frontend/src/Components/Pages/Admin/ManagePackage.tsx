// src/Components/Admin/ManagePackages.tsx

import React from "react";
import { DashboardLayout } from "../DashboardComponents";

export const ManagePackages = () => {
  const packages = [
    { id: 1, name: "Himalayan Valley Adventure", price: 15000 },
    { id: 2, name: "Goa Beach Getaway", price: 12000 },
  ];

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Manage Packages</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Package Name</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td className="border px-4 py-2">{pkg.id}</td>
              <td className="border px-4 py-2">{pkg.name}</td>
              <td className="border px-4 py-2">{pkg.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};
