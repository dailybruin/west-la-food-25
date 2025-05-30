import styled from 'styled-components';
import '../App.css';
import napkin from '../images/napkin.png'; // napkin image
import { mediaQueries } from "../shared/config";


const Wrapper = styled.div`
    position: absolute;
    
    // @media (max-width: 480px) {
    //     margin-left: 0%;
    //     margin-top: 20%;
    // }
`;

const Container = styled.div`
    width: 50em;
    height: 50em;
    background-image: url(${napkin}); 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: black;
    padding: 0;  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;

    bottom: -170em;
    left: 90%;
    
    /* to make the surrounding not impacted upon hover, only the article card content shape */
    -webkit-mask-image: url(${napkin});
    mask-image: url(${napkin});
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
        mask-image: url(${napkin});
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
    }

    /* upon hover, text should be visible */
    &:hover > div {
        opacity: 1;
    }

    ${mediaQueries.mobile} {
      width: 18em !important;
      height: 18em !important;
      left: 20% !important;
      bottom: -53em !important;
    }

     @media (min-width: 1000px) {
      width: 50em;
      height: 50em;
      left: 40%;
    }

    @media (min-width: 900px) and (max-width: 1000px) {
      width: 50em;
      height: 50em;
      left: 20%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      width: 35em;
      height: 35em;
      left: 20%;
    }

    @media (min-width: 100px) and (max-width: 600px) {
      width: 10em;
      height: 10em;
      left: 20%;
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
    font-size: 1.5em;
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

const NapkinArticleCard = ({ props }) => {
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

export default NapkinArticleCard;
