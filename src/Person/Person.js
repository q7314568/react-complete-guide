import React from "react";
import Classes from './Person.css'
// import Radium from 'radium';
// import Styled from "styled-components";

const person = (props) => {
//   const style = {
//     "@media(min-width:500px)": {
//       width: "450px",
//     },
//   };

//   const StyleDiv = Styled.div`
//         width: 60%;
//         margin: 16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         padding: 16px;
//         text-align: center;

//     @media (min-width:500px) {
//             width: 450px;
//     }`;
  // console.log(props);
  return (
    <div className={Classes.Person}>
      <p>{props.children}</p>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
