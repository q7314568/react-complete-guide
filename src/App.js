import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";
// import Styled from "styled-components";

// const StyledButton=Styled.button`
//   background-Color: ${props=>props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-Color: ${props=>props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;



class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Peter", age: 35 },
      { id: "2", name: "Bob", age: 23 },
      { id: "3", name: "Watt", age: 40 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    // const persons=this.state.persons.slice();
    const persons = [...this.state.persons]; //ES6 Spread array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, index) => {
    const persons = [...this.state.persons];
    // persons.find(person=>person.id===index).name=event.target.value;

    const personIndex = this.state.persons.findIndex((p) => p.id === index);
    persons[personIndex].name = event.target.value;

    // const person={...this.state.person[personIndex]};

    // const person=Object.assign({},this.state.person[personIndex]);
    // person.name=event.target.value;
    // persons[personIndex]=person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: this.state.showPersons ? false : true });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;
    let btnClass=[classes.Button];
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi,I'am a React app</h1>
          <p className={assignedClasses.join(" ")}>test</p>
          <button className={btnClass.join(" ")} onClick={this.togglePersonsHandler}>
            Toggle person
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
