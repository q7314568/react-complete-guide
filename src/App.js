import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id:"1", name: "Peter", age: 35 },
      {id:"2", name: "Bob", age: 23 },
      {id:"3", name: "Watt", age: 40 },
    ],
    showPersons: false,
  };

  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons];//ES6 Spread array
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }


  nameChangeHandler = (event,index) => {
    const persons=[...this.state.persons];
    // persons.find(person=>person.id===index).name=event.target.value;

    const personIndex=this.state.persons.findIndex(p=>p.id===index);
    persons[personIndex].name=event.target.value;

    // const person={...this.state.person[personIndex]};

    // const person=Object.assign({},this.state.person[personIndex]);
    // person.name=event.target.value;
    // persons[personIndex]=person;

    this.setState({
      persons:persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: this.state.showPersons ? false : true });
  };

  render() {
    const style={
      backgroundColor:"green",
      color:"white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer"
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event=>this.nameChangeHandler(event,person.id))}
          />
          })}
        </div>
      );
      style.backgroundColor="red";
    }

    return (
      <div className="App">
        <h1>Hi,I'am a React app</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle person</button>
        {persons}
      </div>
    );
  }
}

export default App;
