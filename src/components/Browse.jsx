import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import useFetchPopular from "../hooks/useFetchPopular";
import useFetchTopRated from "../hooks/useFetchTopRated";
import useFetchUpcoming from "../hooks/useFetchUpcoming";
import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchNowPlaying();
  useFetchPopular();
  useFetchTopRated();
  useFetchUpcoming();
  const isGptSearchVisible = useSelector(
  (state) => state.gpt.isGptSearchVisible
);
  return (
    <div className="browse w-full">
       {isGptSearchVisible ? <GptSearch /> : <MainContainer />}
    </div>
  );
};

export default Browse;
