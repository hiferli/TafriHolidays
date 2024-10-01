// src/Components/Supplier/ViewBookings.tsx

import React from "react";
import { DashboardLayout } from "../DashboardComponents";

export const ViewBookings = () => {
  const bookings = [
    { id: 1, package: "Himalayan Valley Adventure", customer: "John Doe", date: "2024-10-05" },
    { id: 2, package: "Goa Beach Getaway", customer: "Jane Smith", date: "2024-11-10" },
  ];

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Package</th>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border px-4 py-2">{booking.id}</td>
              <td className="border px-4 py-2">{booking.package}</td>
              <td className="border px-4 py-2">{booking.customer}</td>
              <td className="border px-4 py-2">{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};
