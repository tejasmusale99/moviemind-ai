import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const Browse = () => {
  const fetchNowPlayingData = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", movieOptions);
    const jsonData = await response.json();
    console.log(jsonData);
    return <div className="browse"></div>;
  };

  useEffect(() => {
    fetchNowPlayingData();
  }, []);

  return (
    <div className="browse">
      <h1>Browse</h1>
    </div>
  );
};

export default Browse;
