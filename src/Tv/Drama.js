import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FaRegPlayCircle } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

function Drama() {
    const [thrillerMovies, setThrillerMovies] = useState([]);
    const [trailer, setTrailer] = useState("");
    const apiKey = "cf9f8c36866c23046aad7733bb2641eb";   
    const apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&with_genres=18`;

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                const movies = response.data.results;
                setThrillerMovies(movies);
            });
    }, []);

    const handleClick = (movie) => {
        if (trailer) {
            setTrailer("");
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailer(urlParams.get('v'));
                })
                .catch(error => console.log(error))
        }
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <section className='pop-con' id='dramatv'>
            <p className='popular-text'>Drama Shows</p>
            <div className='pop-box-cont'>
                {thrillerMovies.map((details, index) => ( 
                     <div key={index} className="pop_box" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.poster_path})`, backgroundSize: 'cover',objectPosition:'center,',backgroundPosition:'center '}}>
                       <div className='play-video'>
                             <div style={{textAlign:'center'}}>
                             <a onClick={() => handleClick(details)}  ><FaRegPlayCircle style={{fontSize:'50px'}} className='play-icons' /></a>
                             </div>
                           <div style={{display:'flex',justifyContent:'space-between',padding:'5px',fontSize:'20px'}}>
                           <p style={{color:'red'}}>
                              {details?'13+':'18+'}
                            </p>
                            <p >
                           Drama
                            </p>
                            <p style={{textTransform:'uppercase',color:'red'}}>
                                {details.original_language}
                            </p>
                           </div>
                           
                           <p className='text-center '>{details.name}</p>
                            </div>
                 </div>
                ))}
            </div>
            <div className='youtube-video'>
                {trailer && <YouTube 
                    videoId={trailer}
                    opts={opts}
                />}
            </div>
        </section>
    );
}

export default Drama;
