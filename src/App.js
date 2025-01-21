

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";
import Navbar from "./components/Layout/Navbar";
import Watched from "./components/pages/Watched";
import WatchLater from "./components/pages/WatchLater"

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<AnimeList />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/watchLater" element={<WatchLater />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
