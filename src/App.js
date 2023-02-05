import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './features/Header/header'

function App() {
  return (
    <Router>
        <Header />
        <NavBar />
     </Router> 
  );
}

export default App;
