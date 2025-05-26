import React, { useState, useEffect } from "react";
import './App.css';
import styled from 'styled-components'
import Header from './components/Header';
import Footer from './components/Footer';
import Map from '../src/images/MapBackground.png';
import { mediaQueries } from '../src/shared/config';
import CoffeeComponent from './components/Coffee';
import BurgerComponent from './components/Burger';


const Background = styled.div`
  background: url(${Map}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 500vh;
  ${mediaQueries.mobile} {
    height: 200vh;
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
      <Background> 
         <CoffeeComponent props={data.articles[0]}/>
         <BurgerComponent props={data.articles[1]}/>
      </Background>
      <Footer/>
    </div>
  );
}

export default App;
