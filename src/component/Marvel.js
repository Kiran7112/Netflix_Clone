import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FaRegPlayCircle } from 'react-icons/fa';

function Marvel() {
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState("");
    const apiKey = "cf9f8c36866c23046aad7733bb2641eb";   

    useEffect(() => {
        // Combine multiple API requests using Promise.all
        Promise.all([
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=avengers`),
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=spiderman`),
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=marvel`),
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=wonder%20woman`),
            // Add more queries for other relevant genres
        ]).then(([avengersResponse, spidermanResponse, marvelResponse, wonderWomanResponse]) => {
            const avengersMovies = avengersResponse.data.results;
            const spidermanMovies = spidermanResponse.data.results;
            const marvelMovies = marvelResponse.data.results;
            const wonderWomanMovies = wonderWomanResponse.data.results;
            
            // Combine the movie arrays and remove duplicates
            const allMovies = [...avengersMovies, ...spidermanMovies, ...marvelMovies, ...wonderWomanMovies];
            const uniqueMovies = allMovies.filter((movie, index, self) =>
                index === self.findIndex((m) => (
                    m.id === movie.id
                ))
            );

            setMovies(uniqueMovies);
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
            <section className='pop-con' id='marvel'>
                <p className='popular-text'>Marvel Series</p>
                <div className='pop-box-cont'>
                    {movies.map((details, index) => ( 
                         <div key={index} className="pop_box" onClick={() => handleClick(details)} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.poster_path})`, backgroundSize: 'cover',objectPosition:'center,',backgroundPosition:'center '}}>
                         <div className='play-video'>
                             <div style={{textAlign:'center'}}>
                             <a onClick={() => handleClick(details)}  ><FaRegPlayCircle style={{fontSize:'50px'}} className='play-icons' /></a>
                             </div>
                           <div style={{display:'flex',justifyContent:'space-between',padding:'5px',fontSize:'20px'}}>
                           <p style={{color:'red'}}>
                              {details?'13+':'18+'}
                            </p>
                            <p  >
                                Marvel
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

export default Marvel;
