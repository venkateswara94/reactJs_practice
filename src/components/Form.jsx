import React from "react"

var formData=["x"]

class Form extends React.Component{
    constructor(){
        super()
        this.state= {
            userName:"",
            comments:"",
            topic:"react"

        }
    }

    
    handleUserNameChange=event=>{
        this.setState({
            userName: event.target.value             
        })
    }
    handleCommentsChange=event=>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange=event=>{
        this.setState({
            topic:event.target.value         

        })
    }
    
    handleSubmit=event=>{
        formData.push(`${this.state.userName}`)
        alert(`userForm{
            UserName : ${this.state.userName},  
            comments: ${this.state.comments}, 
            topic: ${this.state.topic}
            }`)
        event.preventDefault()        
      }
            
    header={
        color:'green',
        fontSize:'50px',
       }
       
    render(){
        return(<div align="center"><h1 style={this.header}>Form Demo</h1>
        <h2>sample</h2>
       <form onSubmit={this.handleSubmit}>
           
             <div>
            <label>User Name </label>
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>

        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="groovy">Groovy</option>
                <option value="jquery">JQuery</option>
            </select>
        </div>
        
            <button type="submit">Submit</button>
        </form>
    <div><h1>{this.state.userName}</h1>
    <h2>{formData}</h2>
    </div>
        </div>            
        )
        
    }
    

}
export default Form