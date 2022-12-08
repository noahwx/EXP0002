import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from "./pages/Home"
import LatestNews from "./pages/LatestNews"
import TrendingNews from "./pages/TrendingNews"
import Search from "./pages/Search"

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/pages/LatestNews' element={<LatestNews />}/>
      <Route exact path='/pages/TrendingNews' element={<TrendingNews />}/>
      <Route exact path='/pages/Search' element={<Search />}/>
    </Routes>
  );
}

export default Main;