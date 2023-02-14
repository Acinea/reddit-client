import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { Header } from './features/Header/header'
import { NavBar } from './features/NavBar/navbar';
import { SearchBar } from './features/SearchBar/searchbar';



function App() {
  return (
    <Router>
        <Header />
        <NavBar />
        <SearchBar />
     </Router> 
  );
}

export default App;
