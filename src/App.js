import React, { Component } from "react";
import "./App.css";
import Card from "./components/card/card.jsx";
import { CardList } from "./components/card-list/card-list.jsx";
import "./components/card-list/card-list.styles.css";

class App extends Component {
  //1: This will run first....
  //the constructor runs before anything in any class, and this is the universal in OOP.
  constructor() {
    super();

    /*
    We are only initializing the state(the state variable(s)) in the constructor,
    nothing else.
    */
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  /*
  2:
  After mounting the initial structure on to the DOM, it runs the lifecycle method to
  re-render the component and after the lifecycle method the render() function runs again to
  re mounting the component on to the DOM.
  after this lifecycle method it's mandatory to ren the original render() method.
  */
  componentDidMount() {
    //this fetch is going to be a promise.......
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  }

  //2: The render then runs because it runs to determine what to show on the page and
  // to render the initial UI of the component(s) on to the DOM.
  render() {
    const filteredMOnsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.onSearchChange}
        />
        <div className="card-list">
          {filteredMOnsters.map((monster) => (
            <Card name={monster.name} id={monster.id} email={monster.email} />
          ))}
        </div>
        <button>Change heading </button>
      </div>
    );
  }
}

export default App;
