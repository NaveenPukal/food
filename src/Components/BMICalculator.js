import React, { useState } from "react";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    // Convert height from meters to centimeters
    const heightInCentimeters = height * 100;
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    const bmiValue =
      weight / ((heightInCentimeters / 100) * (heightInCentimeters / 100));
    // Round BMI to two decimal places
    const roundedBMI = bmiValue.toFixed(2);
    // Set the calculated BMI value in state
    setBMI(roundedBMI);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <button
        className="mb-5 btn btn-primary"
        onClick={() => window.location.reload()}
      >
        Back
      </button>
      <h2>BMI Calculator</h2>

      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label>Height (in meters):</label>
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",
                boxSizing: "border-box",
                fontSize: "16px",
                marginTop: "5px", // Adjust as needed
              }}
            />
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label>Weight (in kg):</label>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",
                boxSizing: "border-box",
                fontSize: "16px",
                marginTop: "5px", // Adjust as needed
              }}
            />
          </div>
        </div>
      </div>
      <br></br>
      <button className="btn btn-primary" onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi && (
        <p className="mt-5" style={{ fontSize: "18px", fontWeight: "bold" }}>
          Your BMI is: <span>{bmi}</span>
        </p>
      )}
    </div>
  );
}

export default BMICalculator;
