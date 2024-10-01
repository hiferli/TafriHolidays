// src/Pages/PackageDetail.tsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PackageDTO } from "../../DTOs/packageDTO";

export const PackageDetail = () => {
    const { packageId } = useParams<{ packageId: string }>();
    const [packageDetail, setPackageDetail] = useState<PackageDTO | null>(null);
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
    useEffect(() => {
      // Check if the user is logged in by looking for UserLogin in localStorage
      const login = localStorage.getItem("UserLogin");
      if (login) {
        setIsUserLoggedIn(true);
      }
  
      const fetchPackageDetail = async () => {
        try {
          const response = await axios.get<PackageDTO>(`https://localhost:7024/GetPackageByPackageId?PackageId=${packageId}`);
          setPackageDetail(response.data);
        } catch (error) {
          console.error("Error fetching package detail:", error);
        }
      };
  
      fetchPackageDetail();
    }, [packageId]);
  
    const handleBooking = async () => {
      if (!isUserLoggedIn) {
        alert("You must be logged in to book a package.");
        return;
      }
  
      try {
        const userId = JSON.parse(localStorage.getItem("UserLogin") || '{}').UserId;
        const bookingData = {
          userId: userId,
          packageId: packageDetail?.packageId,
          // Add other necessary booking details if required
        };
  
        const response = await axios.post('https://localhost:7024/api/Users/ConfirmBooking', bookingData);
        if (response.status === 200) {
          alert("Booking confirmed!");
          // Optionally, navigate or update state to show booking success
        }
      } catch (error) {
        console.error("Error booking package:", error);
        alert("There was an error confirming your booking. Please try again.");
      }
    };
  
    if (!packageDetail) return <div>Loading...</div>;
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">{packageDetail.packageName}</h1>
        <p><strong>Description:</strong> {packageDetail.packageDesc}</p>
        <p><strong>Price:</strong> ₹{packageDetail.packagePrice}</p>
        <p><strong>Duration:</strong> {packageDetail.duration} days</p>
        <p><strong>From:</strong> {packageDetail.source} <strong>To:</strong> {packageDetail.destination}</p>
        <p><strong>Status:</strong> {packageDetail.adminStatus}</p>
        
        {isUserLoggedIn ? (
          <button 
            onClick={handleBooking} 
            className="mt-4 p-2 bg-green-500 text-white rounded"
          >
            Book Now
          </button>
        ) : (
          <p className="mt-4 text-red-500">Please log in to book this package.</p>
        )}
  
        <button onClick={() => navigate(-1)} className="mt-4 p-2 bg-blue-500 text-white rounded">Back</button>
      </div>
    );
  };
  