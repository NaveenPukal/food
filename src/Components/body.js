import React from "react";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div class="hero-image" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <h1>Welcome to Healthy life</h1>
          <button onClick={handleClick}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
