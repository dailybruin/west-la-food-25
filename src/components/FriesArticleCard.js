import styled from 'styled-components';
import '../App.css';
import fries from '../images/fries.png'; // napkin image

const Wrapper = styled.div`
    margin: 1.5%;
    margin-left: 7%;
    
    @media (max-width: 480px) {
        margin-left: 0%;
        margin-top: 20%;
    }
`;

const Container = styled.div`
    width: 500px;
    height: 500px;
    background-image: url(${fries}); 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: black;
    padding: 0;  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    
    -webkit-mask-image: url(${fries});
    mask-image: url(${fries});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    &:hover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #FFF3B0;
        mask-image: url(${fries});
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
    }

    &:hover > div {
        opacity: 1;
    }
    
    @media (max-width: 480px) {
        width: 80%;
    }
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0; 
    transition: opacity 0.5s ease; 
    z-index: 1;
`;

const Title = styled.h2`
    font-family: Modak;
    font-weight: 400;
    font-size: 30px;
    line-height: 90%;
    letter-spacing: 0%;
    text-align: center;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -2%;
  }
`;

const Byline = styled.p`
    font-family: Indie Flower;
    font-weight: 400;
    font-size: 18px;
    line-height: 90%;
    letter-spacing: 0%;
    text-align: center;
    margin-top: -5%;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const FriesArticleCard = ({ props }) => {
  return (
    <Wrapper>
        <Container>
            <Content>
              <Title>{props.article_title}</Title>
              <Byline>{props.article_byline}</Byline>
            </Content>
        </Container>
    </Wrapper>
  );
};

export default FriesArticleCard;
