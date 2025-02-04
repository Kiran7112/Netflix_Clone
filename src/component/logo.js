import React from 'react';
import "../Home.css";
import { Link } from 'react-router-dom';
function Logo() {  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header>   
     <Link  onClick={scrollToTop}>
     <img 
        src="netflix_logo.svg" className='signin-net-logo'
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg' }}
        style={{ marginTop: '-70px', marginLeft: '-20px' }}
        alt="Netflix Logo"
      />
     </Link>
    </header>
  );
}

export default Logo;
