import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Signup function to handle user registration
  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://localhost:3005/signup", {
        username,
        password,
      });
      setMessage(response.data.message);
      console.log("Signup response:", response.data);
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("Error signing up");
    }
    setUsername("");
    setPassword("");
  };

  // Login function to handle user login
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://localhost:3005/login", {
        username,
        password,
      });
      setMessage(response.data.message);
      console.log("Login response:", response);
      // Redirect the user to another page after successful login
      if (response.data.message === "Login successful") {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Error logging in");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <h1
        style={{
          textDecoration: "underline",
          textDecorationColor: "#7d2ae8",
          textUnderlineOffset: "12px",
        }}
      >
        Nutrition Tracker
      </h1>
      <div className="forms">
        <div className="form-content">
          {isSignup ? (
            // Sigdashboardnup form
            <div className="signup-form">
              <h3 className="title">Signup</h3>
              <form onSubmit={handleSignup}>
                <div className="input-boxes">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Signup" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account?{" "}
                    <button type="button" onClick={() => setIsSignup(false)}>
                      Login now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            // Login form
            <div className="login-form">
              <h3 className="title">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="input-boxes">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Login" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?
                    <button type="button" onClick={() => setIsSignup(true)}>
                      Signup now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Login;
