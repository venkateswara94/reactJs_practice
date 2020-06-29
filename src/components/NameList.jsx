import React from "react"
import Person from "./Person"
function NameList(){
   /*const names = ["Ravi","Kamal","Indira","Somesh","alex"];
   const nameList =  names.map(name=><h2>{name}</h2>);
    return (<div>{nameList}</div>)*/

    const persons = [
        {
            id:1,
            name:'venkatesh',
            age:22,
            skill:'Java'
        },
        {
            id:2,
            name:'Subbu',
            age:24,
            skill:'C++'
        },
        {
            id:3,
            name:'Ramana',
            age:22,
            skill:'Groovy'
        },
        {
            id:5,
            name:'Harish',
            age:28,
            skill:'Python'
        }
    ]
    persons.push({
        id:6,
        name:'BanuPrasad',
        age:20,
        skill:'Mule'
    })
/*const personList = persons.map(person=>(<h1>Hi My name is {person.name}, 
i am {person.age}, my skill is {person.skill}</h1>))*/

const personList = persons.map(person=><Person key={person.id} person={person}/>)

return (<div>{personList}</div>)
}

export default NameList