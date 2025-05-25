import styled from 'styled-components';
import '../App.css';
import skewers from '../images/skewers.png'; // napkin image

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
    background-image: url(${skewers}); 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: black;
    padding: 0;  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    
    /* to make the surrounding not impacted upon hover, only the article card content shape */
    -webkit-mask-image: url(${skewers});
    mask-image: url(${skewers});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    /* upon hover, it should turn yellow */
    &:hover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #FFF3B0;
        mask-image: url(${skewers});
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
    }

    /* upon hover, text should be visible */
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
    margin-top: -30%;

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

const SkewersArticleCard = ({ props }) => {
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

export default SkewersArticleCard;
