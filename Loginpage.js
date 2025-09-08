import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

import "../App.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";



function LoginPage() {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [modalContent, setModalContent] = useState(null);

  const [userId, setUserId] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();



  const backgrounds = [

    "/images/bg_1.jpeg",

    "/images/bg2.jpeg",

    "/images/bg3.jpeg",

    "/images/bg_4.jpeg"

  ];



  useEffect(() => {

    const interval = setInterval(() => {

      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);

    }, 4000);

    return () => clearInterval(interval);

  }, [backgrounds.length]);



  const getStoredPassword = (role) => {

    const stored = localStorage.getItem(`${role}_password`);

    if (stored) return stored;



    if (role === "operator") return "opp123@";

    if (role === "approver") return "app123@";

    if (role === "user") return "use123@";

    return null;

  };



  const handleLogin = (e) => {

    e.preventDefault();



    if (!userId) {

      alert("Please enter a User ID.");

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



    const correctPassword = getStoredPassword(role);



    if (password !== correctPassword) {

      alert("Incorrect password. Please try again or reset your password.");

      return;

    }



    if (role === "operator") navigate("/operator-home");

    if (role === "approver") navigate("/approver-home");

    if (role === "user") navigate("/user-home");

  };



  const openModal = (type) => {

    let title = "";

    let desc = "";



    switch (type) {

      case "help":

        title = "Help";

        desc = "Get quick assistance for login issues, navigation help, and common FAQs.";

        break;

      case "contact":

        title = "Contact Us";

        desc = "You can reach Standard Chartered via email at support@sc.com or call 1800-123-456.";

        break;

      case "support":

        title = "Support";

        desc = "Our support team is available 24/7 to resolve your banking queries and provide assistance.";

        break;

      case "about":

        title = "About Us";

        desc = "Standard Chartered is a leading international bank, committed to driving commerce and prosperity through our unique diversity.";

        break;

      default:

        break;

    }



    setModalContent({ title, desc });

  };



  return (

    <div

      className="login-container"

      style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}

    >

      <header className="header">

        <div className="logo">Standard Chartered</div>

        <nav>

          <a onClick={() => openModal("help")}>Help</a>

          <a onClick={() => openModal("contact")}>Contact Us</a>

          <a onClick={() => openModal("support")}>Support</a>

          <a onClick={() => openModal("about")}>About Us</a>

        </nav>

      </header>



      <div className="main-content">

        <div className="welcome-section">

          <h1>Welcome to Standard Chartered</h1>

          <p>

            We are committed to delivering exceptional banking services with

            integrity, innovation, and inclusivity.

          </p>



          <div className="mottos">

            <div className="motto-card">

              <img src="/icons/secure.png" alt="Secure" /> Secure Transactions

            </div>

            <div className="motto-card">

              <img src="/icons/global.png" alt="Global" /> Global Access

            </div>

            <div className="motto-card">

              <img src="/icons/fast.png" alt="Fast" /> Fast & Reliable

            </div>

            <div className="motto-card">

              <img src="/icons/trust.png" alt="Trust" /> Trusted Banking Partner

            </div>

          </div>

        </div>



        <div className="login-box">

          <h2>User Login</h2>

          <form onSubmit={handleLogin}>

            <input

              type="text"

              placeholder="Enter User ID"

              value={userId}

              onChange={(e) => setUserId(e.target.value)}

              required

            />



            <div className="password-container">

              <input

                type={passwordVisible ? "text" : "password"}

                placeholder="Password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

                required

              />

              <span

                className="toggle-password"

                onClick={() => setPasswordVisible(!passwordVisible)}

              >

                {passwordVisible ? <FaEyeSlash /> : <FaEye />}

              </span>

            </div>



            <button className="login-btn" type="submit">

              Login

            </button>

          </form>



          <div className="extra-links">

            <p>

              <a onClick={() => navigate("/signup")} className="link-btn">

                Sign Up (User Only)

              </a>

            </p>

            <p>

              <a

                onClick={() => navigate("/forgot-password")}

                className="link-btn"

              >

                Forgot Password?

              </a>

            </p>

          </div>

        </div>

      </div>



      {modalContent && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>{modalContent.title}</h2>

            <p>{modalContent.desc}</p>

            <button onClick={() => setModalContent(null)}>Close</button>

          </div>

        </div>

      )}

    </div>

  );

}



export default LoginPage;
