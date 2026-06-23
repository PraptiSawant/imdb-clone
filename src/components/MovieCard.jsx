import React from "react";

function MovieCard() {
  return (
    <div className="h-[40vh] w-[188px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABh2wOtmXBgGPA4j4btGIlxUl17JDx97YKY71cZT6k3hwk_aAXmKTohs&s=10')",}}>

    </div>
  );
}

export default MovieCard;

//https://api.themoviedb.org/3/movie/popular?api_key=eb0edbab8bd753584d71b0b25c275cfd&language=en-US&page=2
