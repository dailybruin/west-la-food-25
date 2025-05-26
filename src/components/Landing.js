import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80vh;
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
  max-height: 100vh;
  object-fit: contain;
`;

const Landing = () => {
  return (
    <Container>
      <Background/>
    </Container>
  );
};

export default Landing;