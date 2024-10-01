// src/Components/Admin/Reports.tsx

import React from "react";
import { DashboardLayout } from "../DashboardComponents";

export const Reports = () => {
  const reports = [
    { month: "January", bookings: 100, revenue: 500000 },
    { month: "February", bookings: 120, revenue: 600000 },
  ];

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Month</th>
            <th className="border px-4 py-2">Bookings</th>
            <th className="border px-4 py-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{report.month}</td>
              <td className="border px-4 py-2">{report.bookings}</td>
              <td className="border px-4 py-2">{report.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};
 