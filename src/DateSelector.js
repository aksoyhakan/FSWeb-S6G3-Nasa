import React from "react";
import styled from "styled-components";

const SCDateSelector = styled.div`
  max-width: 200px;
  width: 25%;
  min-width: 150px;
  margin: 0rem auto 2rem auto;
  border: 0.1rem solid black;
  padding: 0.5rem;
  text-align: center;

  &: hover {
    background: rgb(122, 122, 122);
    font-size: bold;
  }

  ${(props) =>
    props.dateEvent
      ? `background: rgb(${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)});`
      : "background: white;"}
`;

let dateClick = false;
console.log(dateClick);
function DataSelector(props) {
  const { counter, dateFunction } = props;
  console.log("tarih çalıştı");
  if (counter === 1) {
    return (
      <SCDateSelector dateEvent={dateClick}>
        <label for="dateSelection">Select Date: </label>
        <input
          type="date"
          id="dateSelection"
          name="dateSelectionNasa"
          onChange={(event) => {
            dateFunction(event.target.value);
            dateClick = !dateClick;
          }}
        ></input>
      </SCDateSelector>
    );
  } else return null;
}

export default DataSelector;
