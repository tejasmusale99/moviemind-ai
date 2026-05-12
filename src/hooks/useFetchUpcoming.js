import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieOptions } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useFetchUpcoming = () => {
  const dispatch = useDispatch();
  const fetchUpcomingMoviesData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      movieOptions,
    );
    const jsonData = await response.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    fetchUpcomingMoviesData();
  }, []);
};

export default useFetchUpcoming;
