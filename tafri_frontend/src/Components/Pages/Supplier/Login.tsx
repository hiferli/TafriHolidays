// src/Components/Supplier/Login.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SupplierLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic
    if (username === "supplier" && password === "supplier123") {
      localStorage.setItem("role", "supplier");
      navigate("/supplier/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4">Supplier Login</h2>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            className="border border-gray-400 p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="border border-gray-400 p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};
