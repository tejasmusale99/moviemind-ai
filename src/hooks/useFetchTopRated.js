import { useEffect } from "react";
import { movieOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useFetchTopRated = () => {

 const dispatch = useDispatch();

const fetchTopRatedData = async () => {
const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", movieOptions);
const jsonData = await response.json();
// console.log(jsonData);
dispatch(addTopRatedMovies(jsonData.results));
}

useEffect(() => {
  fetchTopRatedData(); 
}, []);
}
export default useFetchTopRated;

