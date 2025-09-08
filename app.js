import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";

import SignUpPage from "./components/SignUpPage";

import ForgotPasswordPage from "./components/ForgotPasswordPage";



function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route

          path="/home"

          element={

            <div style={{ textAlign: "center", marginTop: "50px" }}>

              <h1>Welcome Home!</h1>

              <p>You have successfully logged in to Standard Chartered.</p>

            </div>

          }

        />

      </Routes>

    </Router>

  );

}



export default App;
