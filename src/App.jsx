import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect } from "react";

function App() {
  let [watchList, setWatchList] = useState([]);

  function addToWatchList(movie) {
    let newWatchList = [...watchList, movie];
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  function removeFromWatchList(movie) {
    let newWatchList = watchList.filter((m) => m.id !== movie.id);
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  useEffect(() => {
    let watchListFromLocalStorage = localStorage.getItem("watchList");
    if (watchListFromLocalStorage) {
      setWatchList(JSON.parse(watchListFromLocalStorage));
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} watchList={watchList} />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList WatchList={watchList} setWatchList={setWatchList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
