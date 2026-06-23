import React from "react";
import logo from "../assets/movie-icon.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={logo} alt="logo" className="w-[50px]" />
      <Link to="/" className="text-blue-900">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-900">
        Watchlist
      </Link>
    </div>
  );
}

export default Navbar;
