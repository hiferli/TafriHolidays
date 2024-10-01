// src/Pages/Home.tsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Validations/validations";
import { useUser } from "../../Context/userContext";
import { PackageDTO } from "../../DTOs/packageDTO";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState<PackageDTO[]>([]);

  useEffect(() => {
    const login = localStorage.getItem("UserLogin");
    if (!login) {
      navigate("/login");
    }

    const fetchPackages = async () => {
      try {
        const response = await axios.get<PackageDTO[]>('https://localhost:7024/GetAllAvailablePackages');
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, [navigate]);

  const handlePackageClick = (packageId: number) => {
    navigate(`/package/${packageId}`); // Navigate to the package detail page
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Travel Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div
            key={pkg.packageId}
            className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handlePackageClick(pkg.packageId)}
          >
            <h2 className="text-xl font-semibold">{pkg.packageName}</h2>
            <p>{pkg.packageDesc}</p>
            <p><strong>Price:</strong> ₹{pkg.packagePrice}</p>
            <p><strong>Duration:</strong> {pkg.duration} days</p>
            <p><strong>From:</strong> {pkg.source} <strong>To:</strong> {pkg.destination}</p>
          </div>
        ))}
      </div>
      <button onClick={() => logout(navigate)} className="mt-4 p-2 bg-red-500 text-white rounded">Logout</button>
    </div>
  );
};
