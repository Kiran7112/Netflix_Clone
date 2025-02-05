import React from 'react';
import "./styles/popular.css";
import { Link,Outlet } from 'react-router-dom';
import Herocomponent from './component/herocomponet';
import "./styles/hero.css";
import MainFooter from './component/MainFooter';
import Action_Adv from './Tv/Action&Adv';
import Anime_Shows from './Tv/Animation';
import Comedy_Shows from './Tv/comedy';
import Crime from './Tv/crime';
import Documentry from './Tv/documentry';
import Drama from './Tv/Drama';
import Family from './Tv/Family';
import Mystery from './Tv/Mystery';
import News from './Tv/News';
import Reality from './Tv/Reality';
import Sci_Fi from './Tv/Sci_fi';
import Talk from './Tv/Talk';
import War_Politics from './Tv/War&politics';
import Western from './Tv/Western';
import { useState,useEffect } from 'react';
import Nav from './component/Nav';
import Logo from './component/logo';
import {  useRef } from 'react';

function Main3() {
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
   <Action_Adv/>
          <Anime_Shows/>
      
   <Comedy_Shows/>
   <Crime/>
   <Documentry/>
   <Drama/>
   <Family/>

   <Mystery/>
   <News/>
   <Reality/>
       <Sci_Fi/>
     
   
   <Talk/>
   <War_Politics/>
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


export default Main3;