import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import MainContainer from "./MainContainer";

const Browse = () => {
  useFetchNowPlaying(); 
  return (
    <div className="browse w-screen">
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
