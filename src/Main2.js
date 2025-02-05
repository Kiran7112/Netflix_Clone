import React from 'react';
import { useState,useEffect } from 'react';
import "./styles/popular.css";
import { Link,Outlet } from 'react-router-dom';
import Herocomponent from './component/Herocomponent';
import "./styles/hero.css";
import Thriller from './component/Thriller';
import Crime from './component/Crime';
import Drama from './component/Drama';
import Adventure from './component/Adventure';
import MainFooter from './component/MainFooter';
import Mystery from './component/Mystery';
import Horror from './component/Horror';
import History from './component/History';
import Music from './component/Music';
import War from './component/War';
import Western from './component/Western';
import Nav from './component/Nav';
function Main2() {
  const [load, setLoad] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  
  return (
    <>
    {load && <Logo_Ani/>}
    <Nav/>
    <Herocomponent/>  
    <Thriller/> 
    <Crime/>
      <Drama/> 
      <Adventure/>
      <Mystery/>
       <Horror/>
       <History/>
       <Music/>
       <War/>
       <Western/>
      <div className='next-page'>
             <Link to="/main"><button type="button">1</button></Link>
             <Link to="/main2"><button type="button">2</button></Link>
             <Link to="/main3"><button type="button">3</button></Link>
      </div>
      <MainFooter/>
     
    </>
  )
}
const Logo_Ani=()=>{
  return(
    <>
   
    <div class="box-of-star1">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
    
  </div>
  <div class="box-of-star2">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  
  </div>
  <div class="box-of-star3">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div class="box-of-star4">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div data-js="astro" class="astronaut">
    <div class="head"></div>
    <div class="arm arm-left"></div>
    <div class="arm arm-right"></div>
    <div class="body">
      <div class="panel"></div>
    </div>
    <div class="leg leg-left"></div>
    <div class="leg leg-right"></div>
    <div class="schoolbag"></div>
  
  </div>
  
    </>
  );
  }


export default Main2;