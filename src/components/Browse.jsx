import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import MainContainer from "./MainContainer";

const Browse = () => {
  useFetchNowPlaying(); 
  return (
    <div className="browse">
      {/* 
      
    MainContainer
      - VideoBackground
      - VideoTitle
    SecondaryContainer
      - MovieList * n
        - cards * n  
      
      */}
      <h1>Browse</h1>
      <MainContainer />
    </div>
  );
};

export default Browse;
