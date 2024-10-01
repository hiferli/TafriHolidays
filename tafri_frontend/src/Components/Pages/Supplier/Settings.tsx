// src/Components/Supplier/ProfileSettings.tsx

import React from "react";
import { DashboardLayout } from "../DashboardComponents";

export const ProfileSettings = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Supplier Name</label>
          <input type="text" className="border border-gray-400 p-2 w-full" defaultValue="Supplier Name" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" className="border border-gray-400 p-2 w-full" defaultValue="supplier@example.com" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Save Changes
        </button>
      </form>
    </DashboardLayout>
  );
};
