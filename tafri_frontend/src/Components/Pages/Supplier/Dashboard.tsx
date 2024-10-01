// src/Components/Dashboard/SupplierDashboard.tsx

import React from "react";
import { DashboardLayout } from "../DashboardComponents";

export const SupplierDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Supplier Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">Manage Packages</h3>
          <p>Add, update, or remove travel packages.</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">View Bookings</h3>
          <p>Check bookings made for your packages.</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">Revenue Reports</h3>
          <p>View revenue generated from your packages.</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow-md">
          <h3 className="font-semibold">Profile Settings</h3>
          <p>Manage your profile and account settings.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};
