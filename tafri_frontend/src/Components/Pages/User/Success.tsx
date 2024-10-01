// src/Pages/Success.tsx

import React from "react";
import { useParams } from "react-router-dom";

export const Success = () => {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <h2 className="mt-4">Thank you for your booking!</h2>
      <p>Your order ID is: <strong>{orderId}</strong></p>
      <p>We look forward to serving you!</p>
    </div>
  );
};
