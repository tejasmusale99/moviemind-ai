import { useDispatch } from "react-redux";
import { movieOptions } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useMovieTrailer = (movieId) => {
     const dispatch = useDispatch();
  
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

}