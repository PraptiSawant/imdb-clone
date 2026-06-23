import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=eb0edbab8bd753584d71b0b25c275cfd&language=en-US&page=2").then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [])

  return (
    <div className="p-5">
      <div className="text-2xl m-2 font-bold text-center mb-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} name={movie.original_title} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
