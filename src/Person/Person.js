import React from 'react';
import './Person.css'

const person =(props)=>{
    // console.log(props);
    return (
    <div className="Person">
        <p >{props.children}</p>
        <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
}



export default person;