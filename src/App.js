import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './features/Header/header'
import { NavBar } from './features/NavBar/navbar';
import { HeaderMenu } from './features/Menu/menu'
import { SearchBar } from './features/SearchBar/searchbar';
import { Post } from './features/Post/post'



function App() {
  return (
    <Router>
        <Header />
        <HeaderMenu />
        <NavBar />
        <SearchBar />
     </Router> 
  );
}

export default App;
