import React from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./Context/userContext";

type Props = {
  path: string,
  element : {React.FC}
}

const ProtectedRoute  = ({ path , element} : Props) => {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
};

export default ProtectedRoute;
