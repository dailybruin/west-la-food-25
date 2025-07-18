import styled from 'styled-components';
import '../App.css';
import coffee from '../images/coffee.png';
import { mediaQueries } from "../shared/config";


const Wrapper = styled.div`
  position: absolute;
`;

const Container = styled.div`
  width: 50em;
  height: 50em;
  background-image: url(${coffee});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: black;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  left: 20%;
  top: 10em;
  z-index:2;

  -webkit-mask-image: url(${coffee});
  mask-image: url(${coffee});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    background-color: #FFF3B0;

    -webkit-mask-image: url(${coffee});
    mask-image: url(${coffee});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    z-index: 0;
  }

  &:hover > div {
    opacity: 1;
  }

  ${mediaQueries.mobile} {
    width: 25em !important;
    height: 25em !important;
    left: 0% !important;
    top: 10% !important;
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
  top: 45%;
  left: 55%;
  width: 30%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: Modak;
  font-weight: 400;
  font-size: 25px;
  line-height: 90%;
  text-align: center;

  ${mediaQueries.mobile} {
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -2%;
  }
    
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Byline = styled.p`
  font-family: Indie Flower;
  font-weight: 400;
  font-size: 15px;
  line-height: 90%;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const CoffeeArticleCard = ({ props }) => {
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

export default CoffeeArticleCard;

