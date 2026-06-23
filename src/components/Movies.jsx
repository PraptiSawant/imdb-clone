import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";

function Movies({ addToWatchList, removeFromWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrevious = () => {
    if(pageNo === 1) return;
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eb0edbab8bd753584d71b0b25c275cfd&language=en-US&page=${pageNo}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-2 font-bold text-center mb-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} name={movie.title} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} movie={movie} watchList={watchList} />
        ))}
      </div>

      <Pagination handlePrevious={handlePrevious} handleNext={handleNext} pageNo={pageNo} />
    </div>
  );
}

export default Movies;
