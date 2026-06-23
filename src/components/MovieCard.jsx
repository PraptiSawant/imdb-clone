import React from "react";

function MovieCard({posterPath, name}) {
  return (
    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end items-end" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${posterPath}')`}}>
        <div className="text-white rounded-xl text-xl w-full p-2 text-center bg-gray-900/60">
            {name}
        </div>
    </div>
  );
}

export default MovieCard;

