import React, { Component } from 'react';
import Nav from './components/Nav';
// Displays card components
import Cardlist from './components/Cardlist';
// Hard coded array of users for testing Card and Cardlist components
import { users } from './Users'
import './App.css';


 class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: ''
    }
  }
  
  // onSearchChange handles user input
  // TODO: set/change of searchfield
  // based on user input. 
  onSearchChange = (event) => {
    // logging event changes as simple test of searchfield
    // console.log(event.target.value)
    this.setState({ searchfield: event.target.value })
  }
  
  render() {
    // Create function to filter cards
    // from user input in Nav component
    const filterUsers = users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    
    return (
      <React.Fragment>
        {/* Nav component used later to search characters */}
        <Nav search={ this.onSearchChange } />
        {/* Display array of cards with data from Users.js */}
        <Cardlist user={filterUsers}/>
      </React.Fragment>
    );
  }  
}

export default App;
