import React from 'react'

const names = ["Ravi","Kamal","Indira","Somesh","alex"];
names.push("Sateesh")
//const nameList =  names.map(name=><h2 key={name}>{name}</h2>);
class ComponentLifeCycleMount extends React.Component{
    constructor(){
        super()
        this.state={
           // empId:'',
            //empName:'',
            //age:0,
            city:''
        }
    }

    cityNameAdd= event=>{
        this.setState({
            city:event.target.value
        })
    }
    formSubmitAction=(event)=>{
        names.push(`${this.state.city}`)
        alert(`city : ${this.state.city}`);
        event.preventDefault()

    }
        render(){
        return (<div align="center">
            <div>{names}</div>
        <h1 >Emp Form Data </h1>
        <div>
        <form onSubmit={this.formSubmitAction}>
        <div>
        <label>City:</label>
        <input type="text" value={this.state.city} onChange={this.cityNameAdd} required/>
        </div>
        <button type="submit">Submit</button> 

        </form>
        </div>
        {this.state.city}
        </div>)
    }
}

export default ComponentLifeCycleMount