import React from 'react'
import axios from 'axios'
class HttpPostExample extends React.Component{
    constructor(){
        super()
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }

    changeHandler = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (e)=>{
        e.preventDefault()
        //console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(">>>>>>>",response)
        })
        .catch(error=>{
            console.log(">>>>>>"+error)
        })
    }

    render(){
        const {userId,title,body} = this.state
        return(<div align="center"><h1>Http Post example</h1>
        <div>
            <form onSubmit={this.submitHandler}>
            <div>
                <label>UserID:</label>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            </div>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            </div>
            <div>
            <label>Body:</label>
                <input type="text" name="body" value={body} onChange={this.changeHandler}/>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>        
        </div>)
    }
}
export default HttpPostExample