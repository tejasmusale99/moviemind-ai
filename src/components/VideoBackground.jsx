import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideoKey = useSelector((store) => store.movies.trailer?.key);
  useMovieTrailer(movieId);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 min-w-full min-h-full 
                   w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-125"
        src={`https://www.youtube.com/embed/${trailerVideoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideoKey}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
