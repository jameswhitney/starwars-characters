import React, { Component } from 'react';
import Nav from './components/Nav';
// Displays card components
import Cardlist from './components/Cardlist';
// Hard coded array of users for testing Card and Cardlist components
import { users } from './Users'
import './App.css';


 class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Nav component used later to search characters */}
        <Nav />
        {/* Display array of cards with data from Users.js */}
        <Cardlist user={users}/>
      </div>
    );
  }  
}

export default App;
