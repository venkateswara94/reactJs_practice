import React from 'react';

const MyTest = ()=> <h1>Hello Venkatesh</h1>;

export const Greet = (props)=>{
    
    return <h1>First Greet To {props.name}...{props.children}</h1>
}

export const Greet2 = ()=>{
return React.createElement('div',null, React.createElement('h1',null,'Second Greeting'));
}

export default MyTest;