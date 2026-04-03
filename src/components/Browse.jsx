import useFetchNowPlaying from "../hooks/useFetchNowPlaying";

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
    </div>
  );
};

export default Browse;
