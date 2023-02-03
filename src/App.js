import React from 'react';
import { Counter } from './features/counter/Counter';
import { Banner } from './features/banner/Banner'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
    </div>
  );
}

export default App;
