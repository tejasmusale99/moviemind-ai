import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import useFetchPopular from "../hooks/useFetchPopular";
import useFetchTopRated from "../hooks/useFetchTopRated";
import useFetchUpcoming from "../hooks/useFetchUpcoming";
import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  useFetchNowPlaying();
  useFetchPopular();
  useFetchTopRated();
  useFetchUpcoming();
  return (
    <div className="browse w-full">
      <MainContainer />
      <GptSearch />
    </div>
  );
};

export default Browse;
