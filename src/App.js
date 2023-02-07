import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './features/Header/header'
import { NavBar } from './features/NavBar/navbar';
import { HeaderMenu } from './features/Menu/menu'
import { SearchBar } from './features/SearchBar/searchbar';
import { Article } from './features/Articles/articles';


function App() {
  return (
    <Router>
        <Header />
        <HeaderMenu />
        <NavBar />
        <SearchBar />
        <div className='post-container'>
          <Article />
        </div>
     </Router> 
  );
}

export default App;
