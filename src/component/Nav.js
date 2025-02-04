import React from 'react';
import { FaRegBell } from "react-icons/fa";
import "../styles/hero.css";
import { useState,useEffect } from 'react';
import Logo from './logo';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../config/firebase";
import { CiEdit } from "react-icons/ci";
import {  IoPersonOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { logout } from '../Helper';
import { useLocation } from 'react-router-dom';

function Nav() {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const [keyword,setKeyword]=useState("");

  useEffect(() => {
    // Check if the URL has a hash fragment
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the "#" character
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash fragment, scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

    const navigate=useNavigate();
    const signOutFromUser=async()=>{
        try{

      await signOut(auth).then((response)=>{
        logout();
        
})
navigate("/");
        }catch(error){
          console.log(error.message);
        }
 }
 useEffect(() => {
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const sticky = navbar.offsetTop;
      setIsSticky(window.pageYOffset >= sticky);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  
useEffect(() => {
  
  if (location.hash) {
      const id = location.hash.substring(1); 
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth',
        });
      }
  } else {
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [location]);
  return (
     
    <div className={isSticky ? 'drop-down sticky' : 'drop-down'} id='navbar'>
        <div>
            <Logo/>
        </div>
       <div className='drop-down-con'>
       <div class="dropdown ">
       <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:'none',border:'none'}}>
  Movies
 </a>

 <ul class="dropdown-menu">
   <li><a class="dropdown-item" href="/main/#fantasy">Fantasy</a></li>
   <li><a class="dropdown-item" href="/main/#romantic">Romantic</a></li>
   <li><a class="dropdown-item" href="/main#action">Action </a></li>
   <li><a class="dropdown-item" href="main/#comedy">Comedy </a></li>
   <li><a class="dropdown-item" href="/main/#science">Sc-Fi</a></li> 
   <li><a class="dropdown-item" href="/main2/#crime">Crime </a></li>
    <li><a class="dropdown-item" href="/main2/#thriller">Thriller </a></li>
    <li><a class="dropdown-item" href="/main2/#drama">Drama </a></li>
    <li><a class="dropdown-item" href="/main2/#adv">Adventure</a></li>
    <li><a class="dropdown-item" href="/main2/#mystery">Mystery </a></li>
    <li><a class="dropdown-item" href="/main2/#horror">Horror </a></li>
    <li><a class="dropdown-item" href="/main2/#history">History </a></li>
    <li><a class="dropdown-item" href="/main2/#music">Music</a></li>
    <li><a class="dropdown-item" href="/main2/#war">War </a></li>
    <li><a class="dropdown-item" href="/main2/#western">Western </a></li>
 </ul>
</div>
       </div>
<div class="dropdown">
 <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:'none',border:'none'}}>
   Tv Shows
 </a>

 <ul class="dropdown-menu">
   <li><a class="dropdown-item" href="/main3/#actiontv">Action</a></li>
   <li><a class="dropdown-item" href="/main/#koreon">Kdrama</a></li>
   <li><a class="dropdown-item" href="/main3/#comedytv">Comedy</a></li>
   <li><a class="dropdown-item" href="/main3/#crimetv">Crime </a></li>
   <li><a class="dropdown-item" href="/main3/#doc">Documentry </a></li>
   <li><a class="dropdown-item" href="/main3/#dramatv">Drama</a></li>
   <li><a class="dropdown-item" href="/main3/#familytv">Famlily </a></li>
   <li><a class="dropdown-item" href="/main3/#mysterytv">Mystery </a></li>
   <li><a class="dropdown-item" href="/main3/#newstv">News </a></li>
   <li><a class="dropdown-item" href="/main3/#realitytv">Reality </a></li>
   <li><a class="dropdown-item" href="/main3/#talktv">Talk </a></li>
   <li><a class="dropdown-item" href="/main3/#wartv">War & Politics </a></li>
   <li><a class="dropdown-item" href="/main3/#westerntv">Western </a></li>
 </ul>
</div>
<div class="dropdown">
 <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:'none',border:'none'}}>
   Kids
 </a>

 <ul class="dropdown-menu">
   <li><a class="dropdown-item" href="/main3/#anime">Anime</a></li>
   <li><a class="dropdown-item" href="/main3/#sci-fi">Sc-Fi</a></li>
   <li><a class="dropdown-item" href="/main3/#actiontv">Adventure</a></li>
   <li><a class="dropdown-item" href="/main/#marvel">Marvel </a></li>
 </ul>
</div>
       
       
   <div>
       <FaRegBell className='sub'/>
   </div>
          <div className='profile-btn'> 
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:'none',border:'none'}}>
     <img src={"https://w0.peakpx.com/wallpaper/411/944/HD-wallpaper-virat-kohli-18-king-vk18.jpg" || auth?.currentUser?.photoURL} width={35} height={35} />
 </a>

 <ul class="dropdown-menu dropdown-link ">

  <li><Link  class="dropdown-links "  to="/profile"><CiEdit className='edit-icon'/>Manage Profiles</Link></li>
   <li ><Link class="dropdown-links" to="/profile"><IoPersonOutline className='account-icon'/>Account</Link></li>
   <li ><Link class="dropdown-links" to="/contact"><IoIosHelpCircleOutline className='help-center-icon'/>Help Center</Link></li>
   <li ><Link class="dropdown-links" to="/main3" onClick={signOutFromUser}>Sign Out of Netflix </Link></li>

 </ul>

          </div>
    </div>

  )
}
export default Nav;

