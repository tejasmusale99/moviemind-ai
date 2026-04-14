import React, { useEffect } from "react";
import { movieOptions } from "../utils/constants";
import { log } from "firebase/firestore/pipelines";

const VideoBackground = ({ movieId }) => {
  console.log(movieId);

  const getMoviesAndVideoUrl = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      movieOptions,
    );
    const jsonData = await data.json();
    const VideoData = jsonData.results;
    const filtredData = VideoData.filter((trailer) => trailer.type === "Trailer");
    const trailerVideo = filtredData.length ? filtredData[0] : VideoData[0];
    console.log(trailerVideo);
    
  };

  useEffect(() => {
    getMoviesAndVideoUrl();
  }, []);

  return <h1>{movieId}</h1>;
};

export default VideoBackground;
