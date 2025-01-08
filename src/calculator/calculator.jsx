 //js : active , display-none , form ,eventDelation and eventBubbling,debouncing  todolist practice five times from tomorrow first complete javascript section 
import React, { useState } from 'react'
const Calculator = () => {
    const [targetValue,setTargetValue]  = useState("")
    const [result,setResult] = useState("")
    console.log(targetValue,'targetValue')

    const handleCalculation = (items)=>{
        if(items==="="){
           try{
         const result =   eval(targetValue)
         setResult(result)
         console.log(result,'result')
           }catch(error){
            setResult('Error')

           }
        }else if(items==="reset"){
            setTargetValue("")
            setResult("")  
        }else{
            setTargetValue((prev)=>prev+items)
        }

    }
  return (
    <>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
   <h1>type here: {targetValue}</h1>
   <h2>result :{result}</h2>
   </div>

    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
   
   {['=','reset','/','*','-','+','0','.','1','2','3','4','5','6','7','8','9'].map((items,index)=>(
<button key={index}  onClick={()=>handleCalculation(items)}>{items}</button>
   ))} 
    </div>
    </>
  )
}

export default Calculator