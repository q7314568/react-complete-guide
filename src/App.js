import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Peter", age: 35 },
      { name: "Bob", age: 23 },
      { name: "Watt", age: 40 },
    ],
    showPersons: false,
  };

  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons];//ES6 Spread array
    this.state.persons.splice(personIndex,1);
    this.setState({persons:persons});

  }


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: "Tyler", age: 23 },
      ],
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: this.state.showPersons ? false : true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
          />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi,I'am a React app</h1>
        <button onClick={this.togglePersonsHandler}>Toggle person</button>
        {persons}
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
