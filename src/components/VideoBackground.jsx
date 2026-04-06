import React, { useEffect } from 'react'
import { movieOptions } from '../utils/constants';

const VideoBackground = ({movieId}) => {
  console.log(movieId);
 
  const getVideoUrl = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, movieOptions)
    const jsonData = await data.json();
    console.log(jsonData);
  }

  useEffect(()=>{
    getVideoUrl();
  },[])

  return (
    <h1>{movieId}</h1>
  )
}

export default VideoBackground