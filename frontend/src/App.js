import React from 'react';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Predial Maintenance App</h1>
      </div>
    </Provider>
  );
}

export default App;
