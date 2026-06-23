import React from "react";

function MovieCard({posterPath, name, addToWatchList, removeFromWatchList, movie, watchList}) {
  function doesContain(movie) {
    return watchList.some((m) => m.id === movie.id);
  }
  return (
    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${posterPath}')`}}>
      {doesContain(movie) ? (
        <div onClick={() => removeFromWatchList(movie)} className="bg-gray-900/60 text-white rounded-xl p-2 m-2">
          &#10060;
        </div>
      ) : ( 
      <div onClick={() => addToWatchList(movie)} className="bg-gray-900/60 text-white rounded-xl p-2 m-2">
        &#128525;
      </div>)}

        <div className="text-white rounded-xl text-xl w-full p-2 text-center bg-gray-900/60">
            {name}
        </div>
    </div>
  );
}

export default MovieCard;

