import styled from 'styled-components';
import '../App.css';
import skewers from '../images/skewers.png'; // napkin image
import { mediaQueries } from "../shared/config";


const Wrapper = styled.div`
    position: absolute;
    margin: 1.5%;
    
    // @media (max-width: 480px) {
    //     position: absolute;
    // }
`;

const Container = styled.div`
    width: 50em;
    height: 50em;
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

    left: 45%;
    bottom: -120em;
    
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

    ${mediaQueries.mobile} {
      width: 22em !important;
      height: 22em !important;
      left: 0% !important;
      bottom: -50em !important;
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
    margin-top: -30%;

  ${mediaQueries.mobile} {
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -2%;
  }

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
            <a
            href={props.article_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Title>{props.article_title}</Title>
          </a>
              <Byline>{props.article_byline}</Byline>
            </Content>
        </Container>
    </Wrapper>
  );
};

export default SkewersArticleCard;
