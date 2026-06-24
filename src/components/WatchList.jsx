import React from "react";
import { useState } from "react";
import genreIds from "../utility/geners";
import { useEffect } from "react";

function WatchList({ WatchList, setWatchList, removeFromWatchList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genresList, setGenresList] = useState(["All Genres"]);
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  let handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  let sortIncreasing = () => {
    let sorted = WatchList.sort((a, b) => a.vote_average - b.vote_average);
    setWatchList([...sorted]);
  };

  let sortDecreasing = () => {
    let sorted = WatchList.sort((a, b) => b.vote_average - a.vote_average);
    setWatchList([...sorted]);
  };

  let handleFilter = (genre) => {
    setSelectedGenre(genre);
  };

  useEffect(() => {
    let genreList = WatchList.map((movie) => {
      return genreIds[movie.genre_ids[0]];
    });
    setGenresList(["All Genres", ...genreList]);
  }, [WatchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genresList.map((genre) => (
          <div
            key={genre}
            className={`flex justify-center items-center h-[3rem] w-[9rem] rounded-xl font-semibold cursor-pointer mx-4 ${
              selectedGenre === genre
                ? "bg-blue-600 text-white"
                : "bg-gray-400 text-white"
            }`}
            onClick={() => handleFilter(genre)}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] p-2 text-black bg-gray-200 outline-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="border border-gray-200 m-5 rounded-lg overflow-hidden">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-3 text-gray-800">
            <tr>
              <th>Name</th>
              <th className="flex justify-center items-center">
                <div className="p-2" onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2" onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th className="p-2">Popularity</th>
              <th className="p-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            {WatchList.filter((movie) => {
              if (selectedGenre === "All Genres") {
                return true;
              } else {
                return genreIds[movie.genre_ids[0]] === selectedGenre;
              }
            })
              .filter((movie) =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
              )
              .map((movie) => (
                <tr key={movie.id}>
                  <td className="flex item-center px-6 py-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt="Movie Poster"
                      className="h-[6rem] w-[10rem]"
                    />
                    <div className="mx-10">{movie.title}</div>
                  </td>
                  <td>{movie.vote_average.toFixed(1)}</td>
                  <td>{movie.vote_count}</td>
                  <td>{genreIds[movie.genre_ids[0]]}</td>
                  <td className="text-red-500 hover:cursor-pointer">
                    <button
                      onClick={() => removeFromWatchList(movie)}
                      className="font-bold text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
