import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
   navigate("/login"); // Redirect to the login page
  };

  return (
    <div>
      <h1>You are successfully registered!</h1>
      <button onClick={handleGoToLogin}>Go to Login</button>
    </div>
  );
};

export default SuccessPage;
