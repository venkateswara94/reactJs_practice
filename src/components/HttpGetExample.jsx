import React from 'react'
import axios from 'axios'

class HttpGetExample extends React.Component{

    constructor(){
        super()
        this.state={
            posts:[],
            errorMsg:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        }).catch(error=>{
          console.log("Error Due to",error) 
          this.setState({
              errorMsg:'Error Occured during service call'
              
          })
        });
        }

    render(){
        const {posts,errorMsg} = this.state
        return(<div><h1>RestApi - Response</h1>
        {
            posts.length?posts.map(post=><div key={post.id}>{post.title}</div>):null
        }
        {errorMsg?<div>{errorMsg}</div>:null }        
        </div>)
    }

}
export default HttpGetExample