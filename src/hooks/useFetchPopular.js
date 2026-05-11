import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const useFetchPopular = () => {

   const dispatch = useDispatch();

  const fetchPopularData = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1", movieOptions);
    const jsonData = await response.json();
    dispatch(addPopularMovies(jsonData.results));
    // console.log(jsonData);
  };

  useEffect(() => {
    fetchPopularData();
  }, []);

}

export default useFetchPopular; 