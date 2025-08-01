import React, { useState, useEffect } from "react";
import './App.css';
import styled from 'styled-components'
import Header from './components/Header';
import Footer from './components/Footer';
import Map from '../src/images/MapBackground.png';
import { mediaQueries } from '../src/shared/config';
import NapkinArticleCard from "./components/NapkinArticleCard";
import SkewersArticleCard from "./components/SkewersArticleCard";
import CoffeeComponent from './components/Coffee';
import BurgerComponent from './components/Burger';
import FriesArticleCard from './components/FriesArticleCard';
import Pizza from './components/Pizza';
import Landing from './components/Landing';



const Background = styled.div`
  background: url(${Map}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 600vh;
  ${mediaQueries.mobile} {
    height: 250vh;
  }
`;

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/west-la-food-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      <Landing/>
      <Background> 
        {/* set it to the first index to test the hover effect */}
        <CoffeeComponent props={data.articles[0]}/>
        <BurgerComponent props={data.articles[1]}/>
        <SkewersArticleCard props={data.articles[2]} />
        <NapkinArticleCard props={data.articles[3]}/>
        <FriesArticleCard props={data.articles[4]}/>
        <Pizza props={data.articles[5]}/>
      </Background>
      <Footer/>
    </div>
  );
}

export default App;
