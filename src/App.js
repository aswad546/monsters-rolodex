import logo from './logo.svg';
import './App.css';
import Card from './components/card/card.jsx';
import './components/card-list/card-list.styles.css';

import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.jsx';

import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state={
        monsters:[
          {
            name: 'Frankenstein',
            email: 'frank@hotmail.com',
            id: '1'
          },
          {
            name: 'Dracula',
            email:'drac@gmail.com',
            id: '2'
          },
          {
            name: 'Zombie',
            email: 'zomb@knowledgetech.com',
            id: '3'
          },
        ],
      }
}
render() {
    
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <div className='card-list'>
          {this.state.monsters.map(monster => (
            <Card props={monster}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

