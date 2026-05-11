import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-4">
      <h2 className="text-white text-2xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;