import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FcRating } from "react-icons/fc";
import { GrLanguage } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import YouTube from 'react-youtube';
import '../styles/hero.css';
import Logo from './logo';
import Nav from './Nav';


function Herocomponent() {
  const [rand, setRand] = useState({});
  const [playClicked, setPlayClicked] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(""); // State to store trailer URL
  const api = "cf9f8c36866c23046aad7733bb2641eb";   
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api}&with_networks=213`)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setRand(randomMovie);
        console.log("random",randomMovie);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePlayClick = () => {
    setPlayClicked(true);
    fetchTrailer(rand.original_name);  
  };

  const fetchTrailer = async (title) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${api}&query=${title}`);
      const tvId = response.data.results[0].id;

      const trailerResponse = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${api}&language=en-US`);
      const trailerKey = trailerResponse.data.results.find(result => result.type === "Trailer")?.key;
      if (trailerKey) {
        setTrailerUrl(trailerKey);
      } else {
        console.log("Trailer not found");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const opts = {
    height: '600px',
    width: '100%',
    playerVars: {
      autoplay: 1,
      suggestedQuality: 'large',
      controls: 0,
    },
  };

  return (
    <>
   
    <section className='hero-main-con'>
  

      {!playClicked && rand && rand.backdrop_path && (
        <div className='logo-img'>
          <img
            src={`https://image.tmdb.org/t/p/original/${rand.backdrop_path}`}
            alt={rand.original_name}
            className='poster'
          />
         
        </div>
      )}
      <div className='poster-text'>
      <h1 className='movie-title'>
  {rand.original_name && rand.original_name.split(' ').map((word, index) => {
    if (index === 0 ) {
      return <span key={index}  className='first-title' style={{ color: 'red',fontWeight:'lighter',fontSize:'50px' ,fontFamily:'revert'}} >{word} </span>;
    }else if(index == 1){
      return <span key={index} className='second-title' style={{ color: 'white',fontWeight:'lighter',fontSize:'40px',fontFamily:'serif' }}>{word} </span>; 
    }
    else if(index == 2){
      return <span key={index} className='third-title' style={{ color: 'red',fontWeight:'lighter',fontSize:'55px' }}>{word} </span>; 
    }
    return <span key={index}>{word} </span>;
  })}
</h1>


        <p className='lead movie-overview'>{rand.overview}</p>
        <p className='rating'>
          <FcRating />
          <span style={{ marginRight: '30px', marginLeft: '10px' }}>
            {rand.vote_average}
          </span>
          <span style={{ marginLeft: '10px' }} className='release-date'>
            {rand.first_air_date}
          </span>
        </p>
        <p className='h4 release-date ' style={{ textTransform: 'uppercase' }}>
          <span style={{ marginRight: '10px' }}><GrLanguage /></span>{rand.original_language}
        </p><br />
        <div className='hero-btn'> 
          {!playClicked && (
            <button type="button" className='hero-btn1' onClick={handlePlayClick}>
              <FaPlayCircle className="play-circle" fontSize={'20px'} /> <span style={{ marginLeft: '5px' }}>Play</span>
            </button>
          )}
          <button type='button' className='hero-btn2 ' disabled>
            <IoMdInformationCircleOutline className="play-circle" fontSize={'20px'}  /> Info
          </button>
        </div>
      </div>
      {playClicked && trailerUrl && (
        <section>
          <YouTube videoId={trailerUrl} opts={opts} className="video-player" />
        </section>
      )}
    </section>
    </>
  );
}

export default Herocomponent;
