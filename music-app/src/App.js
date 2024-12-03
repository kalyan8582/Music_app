import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/Sidebar";
import AddMusic from "./Components/AddMusic"; // AddMusic component
import NavBar from "./Components/Navbar";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import ProtectedRoute from "./proctureRoute";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            {/* Persistent Navbar */}
            <NavBar />
            <Routes>
                <Route path="/Login"  element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
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
           
            </Routes>
        </Router>
    );
}

export default App;
