// src/components/Layout.tsx
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";

const Layout: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check for session in localStorage
  useEffect(() => {
    const session = localStorage.getItem("login");
    setIsLoggedIn(!!session);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const scrollToBottom = () => {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollDuration = 1000; // 1 seconds

    const smoothScroll = (start: number, end: number, duration: number) => {
      const difference = end - start;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

        window.scrollTo(0, start + difference * progress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    smoothScroll(window.scrollY, totalScroll, scrollDuration);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>
            </li>
            <li onClick={scrollToBottom}>
              <span className="nav-item">Contact Us</span>
            </li>
            <li>
              <NavLink to="/wishlist" className="nav-item">
                Your Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-item">
                Your Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookings" className="nav-item">
                My Bookings
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <button className="nav-item nav-logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink to="/login" className="nav-item">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left: Social Media */}
          <div className="footer-left">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact Information */}
          <div className="footer-right">
            <h3>Contact Us</h3>
            <p>Email: contact@fakemail.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Fake Street, City, Country</p>
          </div>
          <button className="admin-button">Login as Admin</button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
