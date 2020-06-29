import React,{Component} from 'react'
import axios from 'axios'
class HttpGetOrders extends Component{
    constructor(){
        super()
        this.state={
            orders:[],
            errorMsg:''
        }
    }
     
    orderAjaxCall(){
        axios.get('http://localhost:1900/getOrders')
        .then(response=>{
            console.log(response)
            this.setState({
                orders:response.data
            })
        }).catch(error=>{
          console.log("Error Due to",error) 
          this.setState({
              errorMsg:'Error Occured during service call!!'
              
          })
        });
    }

    getOrdersOnClick = (event)=>{
        this.orderAjaxCall()
    }

    render(){
        const {orders,errorMsg} = this.state
        
        return(<div align="center"><hr/>
            <h1>Orders List</h1>
            <button onClick={this.getOrdersOnClick}>GetOrders</button><hr/>
            {orders.length?<div style={this.div_1}>
            
            {orders.map(order=><h2 align="left">OrderID : {order.orderId} -
            PrieceID : {order.priceId} - ProductID : {order.productId} -
            ProductName : {order.productName}<hr/></h2>)}           
            </div>:null} 
            
          <h2 style={this.errorStyle}>{errorMsg}</h2>   
        </div>)
    }
    errorStyle = {
        color:'purple',
        fontSize:'30px',
        backgroundColor: '#e7f3fe',
       borderleft: '6px solid #2196F3'
    }
    div_1={
        backgroundColor: 'silver',
        padding: '4px 12px',
        borderleft: '6px solid #2196F3',
        width: '80%'
      }
     
}

export default HttpGetOrders