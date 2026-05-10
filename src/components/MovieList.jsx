import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="movie-list flex overflow-x-scroll no-scrollbar">
      <h2>{title}</h2>
      <div className="movie-list-cards flex gap-4 py-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
