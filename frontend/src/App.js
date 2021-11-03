import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </Provider>
  );
}

export default App;
