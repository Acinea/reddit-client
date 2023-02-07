import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './features/Header/header'
import { NavBar } from './features/NavBar/navbar';
import { HeaderMenu } from './features/Menu/menu'
import { SearchBar } from './features/SearchBar/searchbar';
import { Article } from './features/Articles/article';


function App() {
  return (
    <Router>
        <Header />
        <HeaderMenu />
        <NavBar />
        <SearchBar />
        <div className='post-container'>
          <h3>Title</h3>
          <Article />
        </div>
     </Router> 
  );
}

export default App;
