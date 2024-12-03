import React from "react";
import { GoHome, GoSearch } from "react-icons/go";
import "./NavBar.css";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import SideBar from "./Sidebar";
import Login from "./Login";


function Navbar() {
    const [toggled, setToggled] = React.useState(false);

    const handleToggleSidebar = () => {
        setToggled(!toggled);
    };

    const handleSignUp=()=>{
        window.location.href = "/SignUp";  
    }
    const handleLogin=()=>{
        window.location.href = "/Login";  
    }

    return (
        <div>
            {/* Sidebar (toggle visibility based on `toggled` state) */}
            <SideBar toggled={toggled} setToggled={setToggled} />

            <nav>
                {/* Left side - Home Link */}
                <ul className="left">
                    <li>
                        {/* Button to Toggle Sidebar */}
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

                {/* Right side - Sign Up and Log In Links */}
                <ul className="right">
                    <li>
                        <button onClick={handleSignUp}>Sign Up</button>
                    </li>
                    <li>
                        <button onClick={handleLogin}>Log In</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
