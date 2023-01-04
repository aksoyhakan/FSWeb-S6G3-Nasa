import React from "react";

const Bolum = (props) => {
  const { gidenData } = props;
  console.log("Bölüm çalıştı");
  console.log(gidenData);

  if (!gidenData.copyright) {
    return (
      <h3 style={{ margin: "0 auto", padding: "30vh 0", fontSize: "10rem" }}>
        Yükleniyor...
      </h3>
    );
  } else {
    return (
      <div
        style={{
          margin: "3rem",
          paddingLeft: "2rem",
          border: "0.5rem solid red",
        }}
      >
        <p style={{ fontSize: "3rem", fontWeight: "bold" }}>
          {gidenData.title}
        </p>
        <div>
          <img
            style={{ width: "75%" }}
            src={gidenData.url}
            alt="Yüklenen Foto"
          ></img>
        </div>
        <p>Copyright: {gidenData.copyright}</p>
        <p style={{ textAlign: "left", textDecoration: "underline" }}>
          Data Taken from Nasa {gidenData.date}
        </p>
        <p>{gidenData.explanation}</p>
      </div>
    );
  }
};

export default Bolum;
