import React from "react"

const heading={
    fontSize: '72px',
    color: 'black'
}

function Person({person}){
    return <h1 style={heading}>Hi My name is {person.name}, 
    i am {person.age}, my skill is {person.skill}</h1>
}
export default Person