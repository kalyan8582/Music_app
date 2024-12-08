import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/Sidebar";
import AddMusic from "./Components/AddMusic"; // AddMusic component
import Navbar from "./Components/Navbar"; // Default Navbar
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import ProtectedRoute from "./proctureRoute";
import SuccessPage from "./Components/Successpageafterlogin";
import Home from "./Components/Home";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            {/* Render Navbar with conditional props */}
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            
            <Routes>
                <Route path="/Home" element={<Home/> }/>
                <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/SignUp" element={<Signup />} />
                <Route path="/Sidebar" element={<SideBar />} />

                <Route
                    path="/AddMusic"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <AddMusic />
                        </ProtectedRoute>
                    }
                />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;
