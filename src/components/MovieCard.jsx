const MovieCard = ({ posterPath }) => {
  return (
    <div className="movie-card w-[200px] h-[300px] rounded-lg flex  ">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={"movie_poster"}
        />
      </div>
    </div>
  );
};

export default MovieCard;
