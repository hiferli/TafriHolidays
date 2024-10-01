// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { userDTO } from "../DTOs/userDTO";

// Define a context type
interface UserContextType {
  user: userDTO | null; // Change User type to userDTO
  setUser: (user: userDTO | null) => void;
}

// Create a context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<userDTO | null>(null); // Default to null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
