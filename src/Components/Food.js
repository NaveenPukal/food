import React, { useEffect, useState } from "react";
import FoodSection from "./FoodSection";
import { useNavigate } from "react-router-dom";

function Food() {
  const morningOptions = [
    { value: "oats", label: "Masala Oats" },
    { value: "dosa", label: "Dosa" },
    { value: "idly", label: "Idly" },
    { value: "pongal", label: "Pongal" },
    { value: "bread", label: "Bread Omlette" },
  ];

  const afternoonOptions = [
    { value: "briyani", label: "Briyani" },
    { value: "curdRice", label: "Curd Rice" },
    { value: "sambarRice", label: "Sambar Rice" },
    { value: "rasamRice", label: "Rasam Rice" },
    { value: "pannerRice", label: "Panner Rice" },
  ];

  const nightOptions = [
    { value: "fruitSalad", label: "Fruit salad" },
    { value: "chapathi", label: "Chapathi" },
    { value: "dosa", label: "Dosa" },
    { value: "idly", label: "Idly" },
    { value: "pannerRice", label: "Panner Rice" },
  ];

  // State to manage selected options
  const [selectedMorningOption, setSelectedMorningOption] = useState(null);
  const [selectedAfternoonOption, setSelectedAfternoonOption] = useState(null);
  const [selectedNightOption, setSelectedNightOption] = useState(null);

  return (
    <div>
      {/* Main heading */}
      <div style={{ marginTop: "200px" }}>
        <button
          className="mb-5 btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Back
        </button>
        <div className="text-center">
          <h2 className="main-heading">Know your Food health details</h2>
          <p>
            Nutrition is often the missing piece when it comes to managing these
            disorders but with all of the complex and conflicting information
            available
          </p>
        </div>
        {/* Morning Section */}
        <FoodSection
          title="Morning Food"
          options={morningOptions}
          selectedOption={selectedMorningOption}
          handleChange={setSelectedMorningOption}
          imageSrc="https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="Morning Food"
        />
        {/* Afternoon Section */}
        <FoodSection
          title="Afternoon Food"
          options={afternoonOptions}
          selectedOption={selectedAfternoonOption}
          handleChange={setSelectedAfternoonOption}
          imageSrc="https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="Afternoon Food"
        />
        {/* Night Section */}
        <FoodSection
          title="Night Food"
          options={nightOptions}
          selectedOption={selectedNightOption}
          handleChange={setSelectedNightOption}
          imageSrc="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="Night Food"
        />
      </div>
    </div>
  );
}

export default Food;
