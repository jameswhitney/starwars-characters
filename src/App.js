import React, { Component } from 'react';
import Nav from './components/Nav';
// Displays card components
import Cardlist from './components/Cardlist';
// Hard coded array of users for testing Card and Cardlist components
// import { users } from './Users'
import './App.css';

const urls = ['https://swapi.co/api/people/',
'https://swapi.co/api/people/?page=2',
'https://swapi.co/api/people/?page=3',
'https://swapi.co/api/people/?page=4',
'https://swapi.co/api/people/?page=5',
'https://swapi.co/api/people/?page=6',
'https://swapi.co/api/people/?page=7',
'https://swapi.co/api/people/?page=8',
'https://swapi.co/api/people/?page=9',
]

 class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: ''
    }
  }

  async componentDidMount() {
    const getCharacterData = await this.getCharacter(urls)
    const characterArray = getCharacterData.flatMap(character => character.results)
    console.log('Character Data',characterArray)
    this.setState({ users: characterArray })
  }
  
  // onSearchChange handles user input
  // TODO: set/change of searchfield
  // based on user input. 
  onSearchChange = (event) => {
    // logging event changes as simple test of searchfield
    // console.log(event.target.value)
    this.setState({ searchfield: event.target.value })
  }

  getCharacter = async (urls) => {
    const characterData = Promise.all(urls.map(async function(url) {
      const resp = await fetch(url);
      return resp.json()
    }));
    return characterData;
  }
  
  render() {
    // Create function to filter cards
    // from user input in Nav component
    const { searchfield, users } = this.state;
    const filterUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return (
      <React.Fragment>
        {/* Nav component used later to search characters */}
        <Nav search={ this.onSearchChange } />
        {/* Display array of cards with data from Users.js */}
        <Cardlist users={filterUsers}/>
      </React.Fragment>
    );
  }  
}

export default App;
