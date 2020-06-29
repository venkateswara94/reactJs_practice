import React from "react"

export function Child(props){
    return (<div><h1>I am from Child</h1>
        <p><button onClick={props.greetParent}>ChildBtton-1</button></p>
        <p><button onClick={()=>props.greetParent("CHILD")}>ChildBtton-2</button></p>
        </div>)
}