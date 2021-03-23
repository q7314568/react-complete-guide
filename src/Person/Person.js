import React from 'react';
 

const person =(props)=>{
    // console.log(props);
    return (
    <div>
        <p>{props.children}</p>
        <p>My name is {props.name} and I am {props.age} years old!</p>
    </div>
    )
}



export default person;