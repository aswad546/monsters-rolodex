import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";

import "./App.css";

const App = () => {

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMOnsters, setFilteredMOnsters] = useState(monsters);

  //This is a method and going to run at the start for 1 time only, Optimized!
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  //useEffect will be run for the first time own by own and after that it will only run when the Array of dependencies
  // get some change in values. this Hook is going to produce side effects i.e==updating the MONSTERS state!
  useEffect(() => {

    //this fetch is going to be a promise.......
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users)
      );
  }, []);

  useEffect(() => {

    //We will only see the filter monsters weather search-field in empty or not, that's the main logic...
    const newFilteredMOnsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMOnsters(newFilteredMOnsters);
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      {/*Card list is only for displaying the monsters, what to show or what not to isn't of it's bizz*/}
      <CardList monsters={filteredMOnsters} />
    </div>
  );
};


export default App;
