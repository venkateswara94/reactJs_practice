import React from "react";

function FunctionClick(){

    function clickHandler(){
        alert("click Handler");
    }
    return (<div>
        <button onClick={clickHandler}>Button Click</button>
    </div>)
} 
export default FunctionClick