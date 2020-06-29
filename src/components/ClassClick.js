import React , {Component} from "react";

class ClassClick extends Component{

constructor(){
  super()
  this.state = {
    message: "Welcome Visitor",
    label_1 : "Subscribe",
    isSubscribe: true
  }
}

changeMessage(){
  this.setState(this.state.isSubscribe?{
    message: "Thank you for subscring!",
    label_1: 'UnSubscribe',
    isSubscribe: false
  }:{message: "Welcome Visitor",
  label_1 : "Subscribe",
  isSubscribe: true})
}
clickHandler(){
  alert('Click Handler')
}

  render() {

  return (
  <div>
  <h1>{this.state.message}</h1>
  <p><button onClick={()=>this.changeMessage()}>{this.state.label_1}</button></p>
  <p><button onClick={this.clickHandler}>ClickMe</button></p>
  </div>
  )
  };
}

export default ClassClick
