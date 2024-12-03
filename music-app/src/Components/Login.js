import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/Login", formData);
            alert(response.data);
            setIsLoggedIn(true); // Update login state
            navigate("/AddMusic"); // Redirect after login
        } catch (error) {
            setErrorMessage(error.response?.data || "Login failed.");
        }
    };

    return (
        <div style={{ maxWidth: "300px", margin: "auto", padding: "20px" }}>
            <h2>Login</h2>
            {errorMessage && <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
           
        </div>
    );
};

export default Login;
