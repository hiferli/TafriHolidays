import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Pages/User/Dashboard";
import Layout from "./Components/Layout";
import UserLogin from "./Components/Pages/User/UserLogin"; // Adjust the path to your UserContext file
import { UserProvider } from "./Components/Context/userContext";
import ProtectedRoute from "./Components/ProtectedRoutes";
import { CookiesProvider, useCookies } from "react-cookie";
import Bookings from "./Components/Pages/User/Bookings";
import { userDTO } from "./Components/DTOs/userDTO";
import { Home } from "./Components/Pages/User/Home";
import { PackageDetail } from "./Components/Pages/User/PackageDetails";
import { Checkout } from "./Components/Pages/User/Checkout";
import { Success } from "./Components/Pages/User/Success";
import { AdminDashboard } from "./Components/Pages/Admin/Dashboard";
import { SupplierDashboard } from "./Components/Pages/Supplier/Dashboard";
import { Login } from "./Components/Pages/Admin/Login";
import { ManageUsers } from "./Components/Pages/Admin/ManageUser";
import { ManagePackages } from "./Components/Pages/Admin/ManagePackage";
import { Reports } from "./Components/Pages/Admin/Report";
import { Settings } from "./Components/Pages/Admin/Settings";
import { ProfileSettings } from "./Components/Pages/Supplier/Settings";
import { ViewBookings } from "./Components/Pages/Supplier/ViewBookings";
import { SupplierLogin } from "./Components/Pages/Supplier/Login";

const App: React.FC = () => {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleLogin(user: userDTO) {
        setCookie("user", user, { path: "/" });
    }

    return (
        <CookiesProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/package/:packageId" element={<PackageDetail />} />
                <Route
                    path="/login"
                    element={<UserLogin onLogin={handleLogin} />}
                />
                <Route
                    path="/dashboard"
                    element={<Dashboard user={cookies.user} />}
                />
                <Route path="/bookings" element={<Bookings />} />

                <ProtectedRoute
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                />
                <ProtectedRoute
                    path="/supplier/dashboard"
                    element={<SupplierDashboard />}
                />

                <Route path="/admin/login" element={<Login />} />
                <ProtectedRoute
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                />
                <ProtectedRoute
                    path="/admin/manage-users"
                    element={<ManageUsers />}
                />
                <ProtectedRoute
                    path="/admin/manage-packages"
                    element={<ManagePackages />}
                />
                <ProtectedRoute path="/admin/reports" element={<Reports />} />
                <ProtectedRoute path="/admin/settings" element={<Settings />} />
                <ProtectedRoute
                    path="/supplier/dashboard"
                    element={<SupplierDashboard />}
                />

                <Route path="/supplier/login" element={<SupplierLogin />} />
                <ProtectedRoute
                    path="/supplier/dashboard"
                    element={<SupplierDashboard />}
                />
                <ProtectedRoute
                    path="/supplier/manage-packages"
                    element={<ManagePackages />}
                />
                <ProtectedRoute
                    path="/supplier/view-bookings"
                    element={<ViewBookings />}
                />
                <ProtectedRoute
                    path="/supplier/profile-settings"
                    element={<ProfileSettings />}
                />

                <ProtectedRoute
                    path="/checkout/:packageId"
                    element={<Checkout />}
                />
                <ProtectedRoute
                    path="/success/:orderId"
                    element={<Success />}
                />
            </Routes>
        </CookiesProvider>
    );
};

export default App;
