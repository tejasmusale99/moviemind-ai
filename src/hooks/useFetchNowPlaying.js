import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const useFetchNowPlaying = () => {

   const dispatch = useDispatch();

  const fetchNowPlayingData = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", movieOptions);
    const jsonData = await response.json();
    dispatch(addNowPlayingMovies(jsonData.results));
    // console.log(jsonData);
  };

  useEffect(() => {
    fetchNowPlayingData();
  }, []);

}

export default useFetchNowPlaying; 