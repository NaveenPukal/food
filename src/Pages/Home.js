import React, { useState } from "react";
import Header from "../Components/Header";
import Food from "../Components/Food";
import BMICalculator from "../Components/BMICalculator";

function Home() {
  const [isFood, setIsFood] = useState(false);
  const [isBmi, setIsBmi] = useState(false);

  return (
    <div>
      <Header />
      {isFood ? (
        <>
          <Food />
        </>
      ) : isBmi ? (
        <>
          <BMICalculator />
        </>
      ) : (
        <>
          <div className="container" style={{ marginTop: "150px" }}>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card h-100">
                  <img
                    src="https://images.everydayhealth.com/images/diet-nutrition/adult-body-mass-index-guide-alt-1440x810.jpg?sfvrsn=5d905d91_2"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "410px" }}
                  />
                  <div className="card-body d-flex justify-content-between align-items-center flex-column">
                    <div className="text-center">
                      <p className="h3 text-capitalize">BMI Calculation</p>
                      <p>Know your BMI</p>
                    </div>
                    <a
                      onClick={() => setIsBmi(true)}
                      className="btn btn-primary stretched-link text-capitalize mt-2"
                      role="button"
                    >
                      learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card h-100">
                  <img
                    src="https://simple.life/blog/wp-content/uploads/2023/05/SimpleTeam_calorie_calculator.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex justify-content-between align-items-center flex-column">
                    <div className="text-center">
                      <p className="h3 text-capitalize">Calories Info</p>
                      <p>Know you daily food Calories</p>
                    </div>
                    <a
                      className="btn btn-primary stretched-link text-capitalize mt-2"
                      role="button"
                      onClick={() => setIsFood(true)}
                    >
                      learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
