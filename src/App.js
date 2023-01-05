import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Bolum from "./Bolum";
import DateSelector from "./DateSelector";
import styled from "styled-components";

let i = 0;
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
  const firstInfo = {
    copyright: "Stefan Thrun",
    date: "2023-01-05",
    explanation:
      "Hurtling through a cosmic dust cloud a mere 400 li… 20 light-years across the Pleiades star cluster.",
    hdurl:
      "https://apod.nasa.gov/apod/image/2301/M_45_Plejarden_Stefan_Thrun_klein4096.jpg",
    media_type: "image",
  };

  const [info, setInfo] = useState(firstInfo);
  const [date, setDate] = useState(dateObj);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Lrt2sRpRaFto3VKwxOjhV5KIhvc46lYvRGmdScjW&date=${date.year}-${date.month}-${date.day}`
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

  const SCAppDiv = styled.div`
    max-width: 1200px;
    height: auto;
    border: 0.5rem solid black;
    padding: 2rem;
    margin: 3rem auto;
  `;

  return (
    <SCAppDiv>
      <DateSelector counter={i} dateFunction={pickDate} />
      <Bolum gidenData={info} />
    </SCAppDiv>
  );
}
i++;
export default App;
