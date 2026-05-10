import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null; // or loader

  const mainMovie = movies[0];
  // console.log(mainMovie);
  const { title, overview, id } = mainMovie;
  return (
<div className="relative w-screen h-[100vh] overflow-hidden">
  <VideoTitle title={title} overview={overview} />
  <VideoBackground movieId={id} />
  <SecondaryContainer />
</div>
  );
};

export default MainContainer;
