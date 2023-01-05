import React from "react";
import styled from "styled-components";

const SCBolum = styled.div`
  max-width: 1000px;
  height: auto;
  border: 0.1rem solid navy;
  margin: 2rem auto;
  padding: 1rem;
`;

const SCHeader = styled.p`
  text-align: center;
  text-decoration: underline;
  font-size: 2rem;
`;

const SCInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SCImg = styled.div`
  width: 45%;
  min-width: 400px;
  text-align: center;
  margin-right: 1rem;
  @media (max-width: 900px) {
    width: 90%;
    min-width: 1px;
  }
`;

const SCExp = styled.div`
  width: 45%;
  text-align: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Bolum = (props) => {
  const { gidenData } = props;
  console.log(gidenData);
  if (!gidenData.copyright) {
    return <h3>Yükleniyor...</h3>;
  } else {
    return (
      <SCBolum>
        <SCHeader>{gidenData.title}</SCHeader>
        <SCInfo>
          <SCImg>
            <img
              style={{ width: "100%" }}
              src={gidenData.url}
              alt="Yüklenen Foto"
            ></img>
          </SCImg>
          <SCExp>
            <p>Copyright: {gidenData.copyright}</p>
            <p>Data Taken from Nasa {gidenData.date}</p>
            <p>{gidenData.explanation}</p>
          </SCExp>
        </SCInfo>
      </SCBolum>
    );
  }
};

export default Bolum;
