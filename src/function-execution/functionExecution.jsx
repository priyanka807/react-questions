import React from 'react'

const FunctionExecution = () => {
    function sum (a,b){
        return a+b
        }
  return (
    <div><button >{sum(5,7)} This way , sum fun executed immediately when component render . </button>  
    <button onClick={sum(7,5)}>assigned value , sum  This way , function executed immediately , value 12 is assigned to be onclick instead of function . </button> 
    <button onClick={() => console.log(sum(5, 7))}>This way , function reffrence  ,passes function reffrence to execute on click  </button>
</div>
  )
}

export default FunctionExecution


