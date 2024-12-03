import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", password: "", repassword: "" });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        if (formData.password !== formData.repassword) {
            setLoading(false);
            setErrorMessage("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/SignUp", formData);
            alert("Signup successful!");
            setFormData({
                username: "",
                password: "",
                repassword: "",
            });
            // Redirect to another page or display success message
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.");
        }
    };

    return (
        <div style={{ maxWidth: "300px", margin: "auto", padding: "20px" }}>
            <h2>Signup</h2>
            {errorMessage && <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Re-enter Password</label>
                    <input
                        type="password"
                        name="repassword"
                        onChange={handleChange}
                        value={formData.repassword}
                        placeholder="Type password again"
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Signing up..." : "Signup"}
                </button>
            </form>
        </div>
    );
};

export default Signup;
