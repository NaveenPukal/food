import React from "react";
import Header from "./Header";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const foodDetails = {
  oats: { calories: 389, fat: 7, carbs: 66, protein: 17 },
  dosa: { calories: 120, fat: 4, carbs: 15, protein: 3 },
  idly: { calories: 65, fat: 0.5, carbs: 14, protein: 2 },
  pongal: { calories: 120, fat: 4, carbs: 20, protein: 5 },
  bread: { calories: 75, fat: 1, carbs: 14, protein: 3 },
  briyani: { calories: 300, fat: 8, carbs: 45, protein: 12 },
  curdRice: { calories: 150, fat: 3, carbs: 25, protein: 6 },
  sambarRice: { calories: 200, fat: 6, carbs: 28, protein: 5 },
  rasamRice: { calories: 170, fat: 4, carbs: 30, protein: 4 },
  pannerRice: { calories: 290, fat: 10, carbs: 35, protein: 8 },
  fruitSalad: { calories: 75, fat: 0, carbs: 20, protein: 1 },
  chapathi: { calories: 100, fat: 2, carbs: 22, protein: 4 },
};

function FoodSection({
  title,
  options,
  selectedOption,
  handleChange,
  imageSrc,
  imageAlt,
}) {
  const getFoodDetails = (option) => {
    return option ? foodDetails[option.value] : null;
  };

  // Get the food details for the current selected option
  const foodDetail = getFoodDetails(selectedOption);

  return (
    <div className="food-section">
      {/* Section Header */}
      <div
        className="text-center mb-4 gradient-bg"
        style={{
          color: "white",
          padding: "20px",
        }}
      >
        <h1>{title}</h1>
      </div>
      <div className="container-fluid mb-4">
        <div className="row">
          {/* Left side: Image */}
          <div className="col-md-6">
            <img
              src={imageSrc}
              alt={imageAlt}
              width="60%"
              style={{ padding: "10px", borderRadius: "50px" }}
            />
          </div>
          {/* Right side: Select and Display */}
          <div className="col-md-5">
            <h3>Select {title}</h3>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              placeholder="Choose an option..."
            />
            <br />
            <div className="d-flex justify-content-center">
              <h4>
                Dish:
                <span className="text-success">
                  {selectedOption ? selectedOption.label : "-"}
                </span>
              </h4>
            </div>
            {console.log(foodDetail, "llll")}
            {foodDetail && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <span style={{ color: "green" }}>
                          {selectedOption ? selectedOption.label : "-"}
                        </span>{" "}
                        (100g serving)
                      </TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {selectedOption ? selectedOption.label : "-"}
                      </TableCell>
                      <TableCell align="right">{foodDetail.calories}</TableCell>
                      <TableCell align="right">{foodDetail.fat}</TableCell>
                      <TableCell align="right">{foodDetail.carbs}</TableCell>
                      <TableCell align="right">{foodDetail.protein}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodSection;
