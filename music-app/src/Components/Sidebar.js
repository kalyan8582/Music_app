import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

function SideBar({ toggled, setToggled }) {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setToggled(false); 
        navigate("/AddMusic"); 
    };

    return (
        <div className="Home-header">
            <Sidebar
                onBackdropClick={() => setToggled(false)} 
                toggled={toggled} 
                breakPoint="always"
                backgroundColor="#0f8f0f"
                color="white"
            >
                <Menu>
                    <MenuItem onClick={handleMenuClick}>Add Music</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SideBar;
