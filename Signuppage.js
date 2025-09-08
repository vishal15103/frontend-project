import React, { useState, useEffect } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./LoginPage.css";

import "../App.css";



function SignUpPage() {

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [modalContent, setModalContent] = useState(null);



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



  const handleSignUp = (e) => {

    e.preventDefault();

    alert("User account created successfully!");

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

      {/* Header */}

      <header className="header">

        <div className="logo">Standard Chartered</div>

        <nav>

          <a onClick={() => openModal("help")}>Help</a>

          <a onClick={() => openModal("contact")}>Contact Us</a>

          <a onClick={() => openModal("support")}>Support</a>

          <a onClick={() => openModal("about")}>About Us</a>

        </nav>

      </header>



      <div className="main-content" style={{ justifyContent: "center" }}>

        {/* Motto Section */}

        <div className="welcome-section">

          <h1>Create Your Account</h1>

          <p>

            Join Standard Chartered to experience secure, global, and reliable banking.

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



        {/* Signup Form */}

        <div className="login-box">

          <h2>User Sign Up</h2>

          <form onSubmit={handleSignUp}>

            <input type="text" placeholder="User ID" required />

            <input type="text" placeholder="Username" required />



            <div className="password-container">

              <input

                type={passwordVisible ? "text" : "password"}

                placeholder="New Password"

                required

              />

              <span

                className="toggle-password"

                onClick={() => setPasswordVisible(!passwordVisible)}

              >

                {passwordVisible ? <FaEyeSlash /> : <FaEye />}

              </span>

            </div>



            <div className="password-container">

              <input

                type={confirmPasswordVisible ? "text" : "password"}

                placeholder="Confirm Password"

                required

              />

              <span

                className="toggle-password"

                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}

              >

                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}

              </span>

            </div>



            <button className="login-btn" type="submit">

              Sign Up

            </button>

          </form>

        </div>

      </div>



      {/* Modal */}

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



export default SignUpPage;
