import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FaRegPlayCircle } from 'react-icons/fa';

function ScFi() {
    const [scifiMovies, setScifiMovies] = useState([]);
    const [trailer, setTrailer] = useState("");
    const apiKey = "cf9f8c36866c23046aad7733bb2641eb";   
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=878`;

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                const movies = response.data.results;
                setScifiMovies(movies);
            });
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
            suggestedQuality: 'large',
            controls:0,
        },
    }

    const handleClick = (details) => {
        movieTrailer(details?.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailer(urlParams.get('v'));
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <section className='pop-con' id='science'>
                <p className='popular-text'>Sc-Fi Movies</p>
                <div className='pop-box-cont'>
                    {scifiMovies.map((details, index) => ( 
                         <div key={index} className="pop_box" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.poster_path})`, backgroundSize: 'cover',objectPosition:'center,',backgroundPosition:'center '}}>
                         <div className='play-video'>
                             <div style={{textAlign:'center'}}>
                             <a onClick={() => handleClick(details)}  ><FaRegPlayCircle style={{fontSize:'50px'}} className='play-icons' /></a>
                             </div>
                           <div style={{display:'flex',justifyContent:'space-between',padding:'5px',fontSize:'20px'}}>
                           <p style={{color:'red'}}>
                              {details?'13+':'18+'}
                            </p>
                            <p  >
                                Sc-Fi
                            </p>
                            <p style={{textTransform:'uppercase',color:'red'}}>
                                {details.original_language}
                            </p>
                           </div>
                           
                           <p className='text-center '>{details.original_title}</p>
                            </div>
                     </div>
                    ))}
                </div>
            </section>
            <div className='youtube-video'>
                {trailer && <YouTube 
                    videoId={trailer}
                    opts={opts}
                />}
            </div>
        </>
    );
}

export default ScFi;
