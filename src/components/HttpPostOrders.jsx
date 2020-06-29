import React from 'react'
import axios from 'axios'
class HttpPostOrders extends React.Component{
    constructor(){
        super()
        this.state = {
            id: this.getRandomInt(999),
            orderId:'',
            priceId:'',
            productId:'',
            productName:'',
            resMsg:''
        }
    }
    header = {
        color:'yellow',
        fontSize:'20px'
    }
    changeHandler = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    submitHandler = e=>{
       
        //console.log(">>>>>>>>><<<<<<<",this.state)
        /*(this.state.orderId.toString != "" && this.state.orderId != null ||
        this.state.priceId.toString !="" && this.state.priceId != null ||
        this.state.productId.toString !="" && this.state.productId !=null ||
        this.state.productName.toString !="" && this.state.productName !=null)*/
        
        axios.post('http://localhost:1900/createPrice',this.state)
        .then(response=>{
            console.log(response)
            this.setState({
                resMsg:response.data
                
            })
        })
        .catch(error=>{
            console.log(error)
            this.resMsg='Error Occured During service call' + error
        })
        e.preventDefault()
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
      

    render(){
        const {id,orderId,priceId,productId,productName,resMsg} = this.state
        return(<div align="center">
            <h1>Order Details Create</h1>
            <form onSubmit={this.submitHandler}>
                <input type="hidden" name="id" value={id} onChange={this.changeHandler} required/>
            <div>
                    <label>OrderID</label>
                    <input type="text" name="orderId" value={orderId} onChange={this.changeHandler} required/>
                </div>
                <div>
                    <label>PriceID </label>
                    <input type="text" name="priceId" value={priceId} onChange={this.changeHandler} required/>
                </div>
                <div>
                    <label>ProductID</label>
                    <input type="text" name="productId" value={productId} onChange={this.changeHandler} required/>
                </div>
                <div>
                    <label>ProductName</label>
                    <input type="text" name="productName" value={productName} onChange={this.changeHandler} required/>
                </div>
                <button type="submit">Submit</button>
                
            </form>
             <div><h1 style={this.header}>{resMsg}</h1></div>
        </div>)
    }
    
}

export default HttpPostOrders