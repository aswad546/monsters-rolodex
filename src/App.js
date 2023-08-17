import React, { Component } from "react";

import Card from "./components/card/card.jsx";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";

import "./App.css";
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

  //This is a method and going to run at the start for 1 time only, Optimized!
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  //2: The render then runs because it runs to determine what to show on the page and
  // to render the initial UI of the component(s) on to the DOM.
  render() {
    //Optimization process to reduce `this.state & this`
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMOnsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className = "monsters-search-box"
        />
        {/* <div className="card-list">
          {filteredMOnsters.map((monster) => (
            <Card name={monster.name} id={monster.id} email={monster.email} />
          ))}
        </div> */}

        {/*Card list is only for displaying the monsters, what to show or what not to isn't of it's bizz*/}
        <CardList monsters={filteredMOnsters} />
      </div>
    );
  }
}

export default App;
