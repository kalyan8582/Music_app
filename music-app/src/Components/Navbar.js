import React, { useState, useEffect } from "react";
import { GoHome, GoSearch } from "react-icons/go";
import "./NavBar.css";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import SideBar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]); // Only run when setIsLoggedIn changes

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  const handleSignUp = () => {
    window.location.href = "/SignUp";
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    navigate("/Login"); 
  };

  return (
    <div>
    
      <SideBar toggled={toggled} setToggled={setToggled} />

      <nav>
      
        <ul className="left">
          <li>
          
            <button onClick={handleToggleSidebar}>
              <BsReverseLayoutTextSidebarReverse />
            </button>
          </li>
          <li>
            <a href="/">
              <GoHome />
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <ul className="searchbar">
          <li>
            <input type="text" placeholder="What do you want to play?" />
            <GoSearch className="search-icon" />
          </li>
        </ul>

     
        <ul className="right">
          {!isLoggedIn ? (
            <>
              <li>
                <button onClick={handleSignUp}>Sign Up</button>
              </li>
              <li>
                <button onClick={handleLogin}>Log In</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <span>Welcome!</span>
              </li>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
