import { useSelector } from "react-redux";
import MovieList from "./Movielist";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return(
        <div className="secondary-container">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies?.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        </div>  
    )
}

export default SecondaryContainer;