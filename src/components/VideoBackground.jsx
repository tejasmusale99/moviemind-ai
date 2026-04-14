import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideoKey = useSelector((store) => store.movies.trailer?.key);
  useMovieTrailer(movieId);

  return (
    <div className="absolute top-0 left-0 w-screen aspect-video h-full -z-10 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailerVideoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideoKey}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
