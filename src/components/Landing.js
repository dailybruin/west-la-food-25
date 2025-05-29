import React from "react";
import styled from "styled-components";
import Land from "../images/West LA Food.gif";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FCF5EA;
`;

const Background = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Credits = styled.div`
position: absolute;
bottom: 0px; 
width: 150%;
color: white;
padding: 1em;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 28.91px;
z-index: 1; 
left: -3;
`;

const Landing = () => {
  return (
    <Container>
      <Background  src={Land} />
      <Credits>Landing illustration by Helen Sanders and Helen Juwon Park.</Credits>
    </Container>
  );
};

export default Landing;