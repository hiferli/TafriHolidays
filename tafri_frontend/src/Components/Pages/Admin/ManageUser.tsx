// src/Components/Admin/ManageUsers.tsx

import React from "react";
import { DashboardLayout } from "../DashboardComponents";

export const ManageUsers = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  ];

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};
