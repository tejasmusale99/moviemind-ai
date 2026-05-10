import { useSelector } from "react-redux";
import MovieList from "./Movielist";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    return(
        <div className="secondary-container">
            <MovieList title={"Now Playing"} movies={movies} />
        </div>  
    )
}

export default SecondaryContainer;