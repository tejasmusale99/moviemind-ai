import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import useFetchPopular from "../hooks/useFetchPopular";
import useFetchTopRated from "../hooks/useFetchTopRated";
import MainContainer from "./MainContainer";

const Browse = () => {
  useFetchNowPlaying(); 
  useFetchPopular(); 
  useFetchTopRated();
  return (
    <div className="browse w-full">
      {/* 
      
    MainContainer
      - VideoBackground
      - VideoTitle
    SecondaryContainer
      - MovieList * n
        - cards * n  
      
      */}
      <MainContainer />
    </div>
  );
};

export default Browse;
