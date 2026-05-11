const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[200px] flex-shrink-0 rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
      <img
        className="w-full h-[300px] object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="movie_poster"
      />
    </div>
  );
};

export default MovieCard;