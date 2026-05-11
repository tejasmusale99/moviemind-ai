import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;

  return (
    <div className="bg-black">
      
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <VideoBackground movieId={id} />
        <VideoTitle title={title} overview={overview} />
      </div>

      {/* Movie Lists */}
      <div className="relative z-20 -mt-40 pl-12">
        <SecondaryContainer />
      </div>

    </div>
  );
};

export default MainContainer;