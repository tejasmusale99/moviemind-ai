import useFetchNowPlaying from "../hooks/useFetchNowPlaying";

const Browse = () => {
  useFetchNowPlaying(); 
  return (
    <div className="browse">
      <h1>Browse</h1>
    </div>
  );
};

export default Browse;
