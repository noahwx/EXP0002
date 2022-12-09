import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from "./pages/Home"
import LatestNews from "./pages/LatestNews"
import TrendingNews from "./pages/TrendingNews"
import Search from "./pages/Search"
import StoryOne from './stories/StoryOne';
import StoryTwo from './stories/StoryTwo';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/pages/LatestNews' element={<LatestNews />}/>
      <Route exact path='/pages/TrendingNews' element={<TrendingNews />}/>
      <Route exact path='/pages/Search' element={<Search />}/>
      <Route exact path='/stories/StoryOne' element={<StoryOne />}/>
      <Route exact path='/stories/StoryTwo' element={<StoryTwo />}/>
    </Routes>
  );
}

export default Main;