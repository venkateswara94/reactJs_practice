import React from "react"
import {Child} from './Child'
class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            parentName: "Venkatesh"
        }
        this.greetHandler = this.greetHandler.bind(this)
    }

    greetHandler(ch){
    //alert(React.createElement('h1',null,'greetHandlerMethod from parent'))
    alert(`Hi ${this.state.parentName} you are from Parent, I amd from ${ch}`);
    }

    render(){
        return <Child greetParent={this.greetHandler}/>
    }
}

export default Parent