import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Bolum from "./Bolum";

function App() {
  let todayDate = new Date();
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();
  let dateObj = {
    year: year,
    month: month,
    day: day,
  };

  const [info, setInfo] = useState({});
  const [date, setDate] = useState(dateObj);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day}`
      )
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => console.log(error));
  }, [date]);

  function pickDate(callbackDate) {
    let arrayDate = callbackDate.split("-");
    let objDate = {
      year: arrayDate[0],
      month: arrayDate[1],
      day: arrayDate[2],
    };
    setDate(objDate);
  }
  console.log(date);
  console.log(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.year}-${date.month}-${date.day}`
  );
  return (
    <div className="App">
      <label for="dateSelection">Select Date: </label>
      <input
        type="date"
        id="dateSelection"
        name="dateSelectionNasa"
        onChange={(event) => {
          pickDate(event.target.value);
        }}
      ></input>
      <Bolum gidenData={info} />
    </div>
  );
}

export default App;
