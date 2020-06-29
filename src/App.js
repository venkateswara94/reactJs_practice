import React from 'react';
import './App.css';
//import MyTest from './components/MyTest';
//import {Greet,Greet2} from './components/MyTest';
//import ClassClick from './components/ClassClick';
//import FunctionaClick from './components/FunctionClick';
//import Parent from './components/Parent';
//import NameList from './components/NameList'
//import FormExample from './components/Form'
//import ComponentLifeCycleMount from './components/ComponentLifeCycleMount'
//import HttpGetExample from './components/HttpGetExample'
import HttpGetOrders from './components/HttpGetOrders'
//import HttpPostExample from './components/HttpPostExample'
import HttpPostOrders from './components/HttpPostOrders'
function App(){
  return(<div>  
  {/*<MyTest/>*/}
  {/*<Greet name="venkatesh"><p>Its child property of greet</p></Greet>*/}
  {/*<ClassClick/>*/}
  {/*<Greet2/>*/}
  {/*<FunctionaClick/>*/}
  {/*<Parent/>*/}
  {/*<NameList/>*/}
  {/*<FormExample/>*/}
  {/*<ComponentLifeCycleMount/>*/}
  {/*<HttpGetExample/>*/}
  {/*<HttpGetOrders/>*/}
  {/*<HttpPostExample/>*/}
  <HttpPostOrders/>
  <HttpGetOrders/>
  </div>)
}



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;

