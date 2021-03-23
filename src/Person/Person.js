import React from 'react';
 

const person =(props)=>{
    // console.log(props);
    return (
    <div>
        <p onClick={props.click}>{props.children}</p>
        <p>My name is {props.name} and I am {props.age} years old!</p>
        <input type="text" onChange={props.changed}></input>
    </div>
    )
}



export default person;