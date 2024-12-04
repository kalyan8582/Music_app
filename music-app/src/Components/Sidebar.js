import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

function SideBar({ toggled, setToggled }) {
    const navigate = useNavigate();
    const userRole = localStorage.getItem("userRole"); // Get user role from localStorage

    const handleMenuClick = (path) => {
        setToggled(false); 
        navigate(path); 
    };

    return (
        <div className="Home-header">
            <Sidebar
                onBackdropClick={() => setToggled(false)} 
                toggled={toggled} 
                breakPoint="always"
                backgroundColor="white"  // Set background color to white
                color="black"             // Set text color to black (adjust this if needed)
            >

                <Menu>
                    <div class = "menu-container">
                    {userRole === "admin" && (
                        <>
                            <MenuItem onClick={() => handleMenuClick("/AddMusic")}>Add Music</MenuItem>
                            <MenuItem>Create Profile</MenuItem>
                        </>
                    )}

                    {/* User-specific menu items */}
                    {userRole === "user" && (
                        <>
                            <MenuItem onClick={() => handleMenuClick("/UserProfile")}>Profile</MenuItem>
                            <MenuItem onClick={() => handleMenuClick("/UserSettings")}>Settings</MenuItem>
                        </>
                    )}
                </div>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SideBar;
