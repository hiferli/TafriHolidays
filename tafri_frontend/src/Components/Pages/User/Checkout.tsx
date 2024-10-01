// src/Pages/Checkout.tsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PackageDTO } from "../../DTOs/packageDTO";

export const Checkout = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const [packageDetail, setPackageDetail] = useState<PackageDTO | null>(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [razorpayKey, setRazorpayKey] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackageDetail = async () => {
      try {
        const response = await axios.get<PackageDTO>(`https://localhost:7024/GetPackageByPackageId?PackageId=${packageId}`);
        setPackageDetail(response.data);
      } catch (error) {
        console.error("Error fetching package detail:", error);
      }
    };

    const fetchRazorpayKey = async () => {
      try {
        const response = await axios.get('https://localhost:7024/api/Payments/getRazorpayKey'); // Adjust the endpoint for Razorpay key
        setRazorpayKey(response.data.key);
      } catch (error) {
        console.error("Error fetching Razorpay key:", error);
      }
    };

    fetchPackageDetail();
    fetchRazorpayKey();
  }, [packageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async () => {
    if (!razorpayKey) return;

    // Make an API call to create an order and get the order ID
    const orderData = {
      amount: packageDetail?.packagePrice * 100, // Price in paisa
      currency: 'INR',
      receipt: `receipt_order_${Math.random()}`,
      notes: {
        packageId: packageDetail?.packageId,
        userId: JSON.parse(localStorage.getItem("UserLogin") || '{}').UserId, // Assuming UserLogin has UserId
        ...userInfo,
      },
    };

    try {
      const response = await axios.post('https://localhost:7024/api/Payments/createOrder', orderData);
      const orderId = response.data.id;

      // Integrate Razorpay payment
      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: 'INR',
        name: 'Travel Application',
        description: `Booking for ${packageDetail?.packageName}`,
        order_id: orderId,
        handler: async (response: any) => {
          // Handle successful payment here
          const paymentData = {
            orderId: orderId,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };
          // Verify payment on the server
          await axios.post('https://localhost:7024/api/Payments/verifyPayment', paymentData);
          alert('Payment Successful! Redirecting to success page...');
          navigate(`/success/${orderId}`); // Redirect to success page
        },
        prefill: {
          name: userInfo.name,
          email: userInfo.email,
          contact: userInfo.phone,
        },
        notes: {
          packageId: packageDetail?.packageId,
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error during payment process. Please try again.");
    }
  };

  if (!packageDetail) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Checkout for {packageDetail.packageName}</h1>
      <h2 className="mt-4 text-xl">Package Price: ₹{packageDetail.packagePrice}</h2>

      <h3 className="mt-4">Enter your details:</h3>
      <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
        <div className="mt-2">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-2">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-2">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Pay Now
        </button>
      </form>
    </div>
  );
};
