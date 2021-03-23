import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Peter", age: 35 },
      { name: "Bob", age: 23 },
    ],
  };

  switchPersons = (newName) => {
    // this.setState({ persons: this.state.persons.reverse() });
    this.setState({
      persons: [
        { name: "Peter", age: 35 },
        { name: newName, age: 23 }
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi,I'am a React app</h1>
        <button onClick={()=>this.switchPersons('Tyler')}>switch person</button>
        <Person
          click={this.switchPersons.bind(this,'Tyler!!')}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies is VideoGame
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "app" },
    //   React.createElement("h1", null, "Hi,I'am a React app")
    // );
  }
}

export default App;
