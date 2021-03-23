import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Peter", age: 35 },
      { name: "Bob", age: 23 },
    ],
  });

  const switchPersons = () => {
    setPersonsState({ persons: personState.persons.reverse() });
  };

  return (
    <div className="App">
      <h1>Hi,I'am a React app</h1>
      <button onClick={switchPersons}>switch person</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        My hobbies is VideoGame{" "}
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "app" },
  //   React.createElement("h1", null, "Hi,I'am a React app")
  // );
};

export default app;

// state={
//   persons:[
//     {name:"Peter",age:35},
//     {name:"Bob",age:23}
//   ]
// }

// switchPersons=()=>{
//   this.setState({persons:this.state.persons.reverse()});
// }
