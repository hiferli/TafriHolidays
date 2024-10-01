import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/userContext"; // Assuming you're using context for user
import { logout } from "../../Validations/validations"; 
import { userDTO } from "../../DTOs/userDTO";

type Props = {
	user: userDTO
}

export const Dashboard = ({ user } : Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const login = localStorage.getItem("UserLogin");
      if (!login) {
        navigate("/login");
      }
    }
  }, [navigate, user]);

  return (
    <div>
      <h1>User Details</h1>
      <h3>Info: {user.AddressId}</h3>
      {user ? (
        <div>
          {/* Iterate over all key-value pairs of user object */}
          <ul>
            {Object.entries(user).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {String(value)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}

      <button onClick={() => logout(navigate)}>Logout</button>
    </div>
  );
};
