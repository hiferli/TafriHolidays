// src/Components/Shared/Sidebar.tsx

import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-xl mb-4">Dashboard</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard" className="block py-2 hover:bg-gray-700">Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/supplier/dashboard" className="block py-2 hover:bg-gray-700">Supplier Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
