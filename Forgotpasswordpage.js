import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./ForgotPasswordPage.css";



function ForgotPasswordPage() {

  const [userId, setUserId] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();



  const handleReset = (e) => {

    e.preventDefault();



    if (!userId) {

      alert("Please enter your User ID.");

      return;

    }



    let role = "";

    if (userId.startsWith("Opp123")) role = "operator";

    else if (userId.startsWith("App123")) role = "approver";

    else if (userId.startsWith("Use123")) role = "user";

    else {

      alert("Invalid User ID. Please use Opp123..., App123..., or Use123...");

      return;

    }



    if (newPassword !== confirmPassword) {

      alert("Passwords do not match.");

      return;

    }



    if (newPassword.trim().length < 6) {

      alert("Password should be at least 6 characters long.");

      return;

    }



    // Store new password in localStorage

    localStorage.setItem(`${role}_password`, newPassword);



    alert("Password reset successful! You can now log in with your new password.");

    navigate("/"); // redirect to login page

  };



  return (

    <div className="forgot-password-container">

      <h2>Reset Your Password</h2>

      <form onSubmit={handleReset}>

        <input

          type="text"

          placeholder="Enter User ID"

          value={userId}

          onChange={(e) => setUserId(e.target.value)}

          required

        />

        <input

          type="password"

          placeholder="Enter New Password"

          value={newPassword}

          onChange={(e) => setNewPassword(e.target.value)}

          required

        />

        <input

          type="password"

          placeholder="Confirm New Password"

          value={confirmPassword}

          onChange={(e) => setConfirmPassword(e.target.value)}

          required

        />

        <button type="submit" className="reset-btn">

          Reset Password

        </button>

      </form>

      <p>

        <a onClick={() => navigate("/")} className="link-btn">

          Back to Login

        </a>

      </p>

    </div>

  );

}



export default ForgotPasswordPage;
