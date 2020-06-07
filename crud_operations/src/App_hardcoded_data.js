import React, { Component } from 'react'
import './index.css'
import Table from './Table'
import './App.css';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }

  render() {
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
}



export default App;
