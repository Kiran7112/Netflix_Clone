import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Herocomponet from './component/herocomponet';
import Popular from './component/Popular';
import Toprated from './component/Toprated';
import Thriller from './component/Thriller';
import "./styles/main.css"
import Romance from './component/Romance';
import Anime from './component/Anime';
import Action from './component/Action';
import Comedy from './component/comedy';
import Marvel from './component/Marvel';
import Upcoming from './component/Upcoming';
import Adventure from './component/Adventure';
import Fantasy from './component/Fantasy';
import ScFi from './component/Sc-Fi';
import Crime from './component/Crime';
import Drama from './component/Drama';
import MainFooter from './component/MainFooter';
import Loading from './Loading';
import "./styles/popular.css"
import { signOut } from 'firebase/auth';
import {auth} from"./config/firebase";
import Nav from "./component/Nav";
import TeluguRomantic from './component/TeluguRomantic';
import TeluguSuspense from './component/TeluguSuspense';
import KrDrama from './component/KrDrama';
import KrDramaAction from './component/KdramaAction';
function Main() {
  const [load, setLoad] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setLoad(false);
  }, 2000);
}, []);

  return (
    <section className='main-container'>
      
        {load && <Logo_Ani/>}
        <Nav  />
          <Herocomponet />
          <Popular />
          <Upcoming />
          <Toprated />
          <Marvel />
          <KrDramaAction/>
          <KrDrama/>
          <Fantasy  />
          <Romance />
          <Anime />
          <TeluguRomantic/>
          <TeluguSuspense/>
          <Action />
          <Comedy />   
          <ScFi />
          <div className='next-page'>
            <a href="main"><button type="button" >1</button></a>
            <a href="main2"><button type="button" >2</button></a>
            <a href="main3"><button type="button" >3</button></a>
          </div>
          <MainFooter />
      
      
    </section>
  )
}



const Logo_Ani=()=>{
return(
  <>
 
  <div className="box-of-star1">
  <div className="star star-position1"></div>
  <div className="star star-position2"></div>
  <div className="star star-position3"></div>
  <div className="star star-position4"></div>
  <div className="star star-position5"></div>
  <div className="star star-position6"></div>
  <div className="star star-position7"></div>
  
</div>
<div className="box-of-star2">
  <div className="star star-position1"></div>
  <div className="star star-position2"></div>
  <div className="star star-position3"></div>
  <div className="star star-position4"></div>
  <div className="star star-position5"></div>
  <div className="star star-position6"></div>
  <div className="star star-position7"></div>

</div>
<div className="box-of-star3">
  <div className="star star-position1"></div>
  <div className="star star-position2"></div>
  <div className="star star-position3"></div>
  <div className="star star-position4"></div>
  <div className="star star-position5"></div>
  <div className="star star-position6"></div>
  <div className="star star-position7"></div>
</div>
<div className="box-of-star4">
  <div className="star star-position1"></div>
  <div className="star star-position2"></div>
  <div className="star star-position3"></div>
  <div className="star star-position4"></div>
  <div className="star star-position5"></div>
  <div className="star star-position6"></div>
  <div className="star star-position7"></div>
</div>
<div data-js="astro" className="astronaut">
  <div className="head"></div>
  <div className="arm arm-left"></div>
  <div className="arm arm-right"></div>
  <div className="body">
    <div className="panel"></div>
  </div>
  <div className="leg leg-left"></div>
  <div className="leg leg-right"></div>
  <div className="schoolbag"></div>

</div>

  </>
);
}
export default Main;
