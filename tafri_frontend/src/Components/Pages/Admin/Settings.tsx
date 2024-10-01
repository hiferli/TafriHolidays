// src/Components/Admin/Settings.tsx

import React from "react";
import { DashboardLayout } from "../DashboardComponents";

export const Settings = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Application Name</label>
          <input type="text" className="border border-gray-400 p-2 w-full" defaultValue="Travel Application" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Support Email</label>
          <input type="email" className="border border-gray-400 p-2 w-full" defaultValue="support@example.com" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Save Changes
        </button>
      </form>
    </DashboardLayout>
  );
};
