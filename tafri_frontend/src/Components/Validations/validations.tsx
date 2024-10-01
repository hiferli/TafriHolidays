import { NavigateFunction, useNavigate } from "react-router-dom";

export const checkEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) return "Empty Email Not allowed";
  else if (!emailRegex.test(value)) return "Invalid Email";
  return "";
};

export const logout = (navigate : NavigateFunction) => {
    localStorage.removeItem("UserLogin");

    // Optionally, navigate to the login page or homepage
    navigate("/login"); // Change this to the desired route after logout
  };