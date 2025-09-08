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



        {/* Role-based routes */}

        <Route

          path="/operator-home"

          element={

            <div style={{ textAlign: "center", marginTop: "50px" }}>

              <h1>Operator Dashboard</h1>

              <p>Welcome Operator! You can access all pages and user stories.</p>

            </div>

          }

        />

        <Route

          path="/approver-home"

          element={

            <div style={{ textAlign: "center", marginTop: "50px" }}>

              <h1>Approver Dashboard</h1>

              <p>Welcome Approver! You can access the payment approval page.</p>

            </div>

          }

        />

        <Route

          path="/user-home"

          element={

            <div style={{ textAlign: "center", marginTop: "50px" }}>

              <h1>User Dashboard</h1>

              <p>Welcome User! You can view and manage your transactions.</p>

            </div>

          }

        />

      </Routes>

    </Router>

  );

}



export default App;
