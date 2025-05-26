import styled from 'styled-components';
import '../App.css';
import coffee from '../images/coffee.png';

const Wrapper = styled.div`
  position: absolute;
`;

const Container = styled.div`
  width: 800px;
  height: 800px;
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

  margin-left: 550px;
  margin-top: 35px;
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

  @media (max-width: 480px) {
    width: 270%;
    margin-left: 100px;
    margin-top: 250px;
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
          <Title>{props.article_title}</Title>
          <Byline>{props.article_byline}</Byline>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default CoffeeArticleCard;

