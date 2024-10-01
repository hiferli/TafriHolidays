// src/Components/Dashboard/AdminDashboard.tsx

import React from "react";
import { DashboardLayout } from "./DashboardLayout";

export const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">Manage Users</h3>
          <p>View and manage registered users.</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">Manage Packages</h3>
          <p>View and manage travel packages.</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">Reports</h3>
          <p>View reports and analytics.</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">Settings</h3>
          <p>Manage application settings.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};
