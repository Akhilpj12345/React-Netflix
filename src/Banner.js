import React, { useEffect, useState } from 'react'
import instance from './instance'
import requests from './requests'
import './Banner.css'
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const[movie , setMovie] = useState([])

    useEffect(() =>{
    async function fetchData (){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        )
    }
    fetchData()
}, [])
 function truncate (str ,n){
    return str?.length > n ? str.substr(0,n-1) + "..." :str
 }
  return (
    <header 
    className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition:"center center"
     }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>
               {movie?.title || movie?.name}
            </h1>
            <h1 className='banner__description'>
                {truncate(movie?.overview,150)}
            </h1>
        </div>
    
    </header>                                                                            
  )
}

export default Banner