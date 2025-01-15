
import React from 'react'
import { useState } from 'react'

const Calculator1 = () => {

    const [digits,setDigits] = useState("")
    console.log(digits,'digits')
    const [result,setResult] = useState()

    const handleCalculator = (digit)=>{
        
        if(digit==="="){
            try{
     const calcResult =   eval(digits)
     setResult(calcResult)
            }catch(error){
                setResult("Error")
console.log(error,'error')
            }
        }else if(digit==="AC"){
            setResult("")
            setDigits("")
        }else{
            setDigits((prev)=>prev+digit)
        }
       
    }
  return (
    <>
    <h2 style={{textAlign:"center"}}>digits :{digits} result :{result}</h2>
    <div style={{display:'flex',justifyContent:'center',marginTop:"30px"}}>

{
    ['AC','0','=',9,8,7,6,5,4,3,2,1,'+','/','-','*','.'].map((items,index)=>(
        <button key={index} onClick={(e)=>handleCalculator(items)} style={{background:'#dbaaaa',padding:'7px',border:'1px solid red'}}>
        {items}
        </button>
        ))
}
    </div>
    </>
  )
}

export default Calculator1