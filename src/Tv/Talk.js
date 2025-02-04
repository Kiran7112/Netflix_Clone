
import React, { useEffect, useState } from 'react';
import "../styles/popular.css";
import axios from 'axios';
import YouTube from 'react-youtube';
import { FaRegPlayCircle } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

function Talk() {
    const [popsearch, setPopsearch] = useState([]);
    const [trailer, setTrailer] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const api = "cf9f8c36866c23046aad7733bb2641eb";
    const apiKey = "AIzaSyAnC05PcYnhiYa3dg4ezQFqmNRsStoQVNQ";
    const youtubeBaseUrl = "https://www.googleapis.com/youtube/v3/search";

    const api_url =  `https://api.themoviedb.org/3/discover/tv?api_key=${api}&language=en-US&with_genres=10767`;



    useEffect(() => {
        axios.get(api_url)
            .then((response) => {
                const movies = response.data.results;
                setPopsearch(movies);
                console.log("pop", movies);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
        },
    }

    const searchYouTubeVideo = async (query) => {
        try {
            setLoading(true);
            const response = await axios.get(youtubeBaseUrl, {
                params: {
                    part: 'snippet',
                    q: `${query} trailer`,
                    type: 'video',
                    key: apiKey,
                    maxResults: 1
                }
            });
            setLoading(false);
            const videoId = response.data.items[0].id.videoId;
            setTrailer(videoId);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    const handleClick = (details) => {
        if (!trailer) {
            searchYouTubeVideo(details?.name || "");
        } else {
            setTrailer("");
        }
    }

    return (
        <>
            <section className='pop-con' id='talktv'>
                <p className='popular-text'>Talk Shows</p>
                <div className='pop-box-cont'>
                    {popsearch.map((details, index) => (
                        <div key={index} className="pop_box"  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.poster_path})`, backgroundSize: 'cover',objectPosition:'center',backgroundPosition:'center'}}>
                            <div className='play-video'>
                             <div style={{textAlign:'center'}}>
                             <a onClick={() => handleClick(details)}  ><FaRegPlayCircle style={{fontSize:'50px'}} className='play-icons' /></a>
                             </div>
                           <div style={{display:'flex',justifyContent:'space-between',padding:'5px',fontSize:'20px'}}>
                           <p style={{color:'red'}}>
                              {details?'13+':'18+'}
                            </p>
                            <p >
                             Talk
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
            </section>
            <div className='youtube-video'>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {trailer && <YouTube 
                    videoId={trailer}
                    opts={opts}
                />}
            </div>
        </>
    );
}

export default Talk;



