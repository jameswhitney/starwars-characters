import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Nav component used later to search characters */}
      <Nav />
      {/* Card skeleton will populate Cardlist component */}
      <Card />
    </div>
  );
}

export default App;
