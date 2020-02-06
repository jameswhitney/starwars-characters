import React, { Component } from 'react';
import Nav from '../components/Nav';
// Displays card components
import Cardlist from '../components/Cardlist';
import Loading from '../components/Loading';
// import Loading2 from '../components/Loading2';

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
      characters: [],
      searchfield: ''
    }
  }

  async componentDidMount() {
    try {
      const getCharacterData = await this.getCharacter(urls)
      const characterArray = getCharacterData.flatMap(character => character.results)
      this.setState({ characters: characterArray })
    } catch {
      alert('Oops something went wrong. Try refreshing the page')
    }

  }
   
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  getCharacter = async (urls) => {
    try {
      const characterData = Promise.all(urls.map(async function(url) {
        const resp = await fetch(url);
        return resp.json()
        }));
        return characterData;
    } catch (err) {
      alert('Oops something went wrong. Try refreshing the page')
    }
  } 
  
  render() {
    const { searchfield, characters } = this.state;
    const filterUsers = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return !characters.length ? <Loading /> :
      (
        <React.Fragment>
          <Nav search={ this.onSearchChange } />
          <Cardlist characters={filterUsers}/>
        </React.Fragment>
      );
  }  
}

export default App;
