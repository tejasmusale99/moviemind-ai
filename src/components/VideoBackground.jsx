import React, { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  console.log(movieId);

  const getMoviesAndVideoUrl = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      movieOptions,
    );
    const jsonData = await data.json();
    const VideoData = jsonData.results;
    const trailerFilterVideo = VideoData.filter((trailer) => trailer.type === "Trailer");
    console.log(trailerFilterVideo[0]);
  };

  useEffect(() => {
    getMoviesAndVideoUrl();
  }, []);

  return <h1>{movieId}</h1>;
};

export default VideoBackground;
