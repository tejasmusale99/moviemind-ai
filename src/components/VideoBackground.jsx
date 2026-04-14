import React, { useEffect } from "react";
import { movieOptions } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideoKey = useSelector((store)=> store.movies.trailer?.key)
  console.log(movieId);

  const getMoviesAndVideoUrl = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      movieOptions,
    );
    const jsonData = await data.json();
    const VideoData = jsonData.results;
    const filtredData = VideoData.filter(
      (trailer) => trailer.type === "Trailer",
    );
    const trailerVideo = filtredData.length ? filtredData[0] : VideoData[0];
    console.log(trailerVideo);
    dispatch(addTrailer(trailerVideo))
  };

  useEffect(() => {
    getMoviesAndVideoUrl();
  }, []);

  return (
    <div className="">
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
