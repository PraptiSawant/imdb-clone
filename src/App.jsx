import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchList, setWatchList] = useState([]);

  function addToWatchList(movie) {
    setWatchList([...watchList, movie]);
    console.log(watchList);
  }

  function removeFromWatchList(movie) {
    setWatchList(watchList.filter((m) => m.id !== movie.id));
  }

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
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
