import React, { Component } from "react";
import "./App.css";
import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const searcedhMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monster"
          handleChange={e => {
            this.setState({ searchField: e.target.value }, () => {
              // console.log(this.state);
            });
          }}
        />
        <CardList monsters={searcedhMonsters} />
      </div>
    );
  }
}

export default App;
