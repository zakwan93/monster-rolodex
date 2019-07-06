import React, { Component } from "react";
import "./App.css";
import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

class App extends Component {
  // how to bind own method using ES5 syntax in React
  // it must be declare inside the constructor
  // constructor() {
  //   super();
  //   this.handleChangeHandler = this.handleChangeHandler.bind(this);
  // }

  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // if I write any own method in class like ES5 syntax
  // I have to bind this keyword in my state with this method then only it's gonna work

  // handleChangeHandler(e) {
  //   this.setState({ searchField: e.target.value }, () => {
  //     // console.log(this.state);
  //   });
  // }

  handleChangeHandler = e => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const searcedhMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChangeHandler}
        />
        <CardList monsters={searcedhMonsters} />
      </div>
    );
  }
}

export default App;
