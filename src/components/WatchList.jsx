import React from "react";
import { useState } from "react";

function WatchList({ WatchList, setWatchList }) {
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-semibold cursor-pointer mx-4">
          Action
        </div>
        <div className="bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-semibold cursor-pointer">
          Action
        </div>
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
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2" onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th className="p-2">Popularity</th>
              <th className="p-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            {WatchList.filter((movie) =>
              movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
            ).map((movie) => (
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
                <td>{movie.genre_ids.join(", ")}</td>
                <td className="text-red-500 hover:cursor-pointer">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
