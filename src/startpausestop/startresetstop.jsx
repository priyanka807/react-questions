import React, { useEffect, useState } from 'react'

const Startresetpause = () => {
    const [start,setStart] = useState(false)
    const [count,setCount] = useState(0)
    useEffect(()=>{ 
let interval;
          interval = setInterval(()=>{
            if(start){
         setCount((prev)=>prev+1)
        }
 },100)   
        console.log(interval,'addinterval') 
        return ()=>{console.log(interval,'clearinterval');clearInterval(interval)}
    },[start,count])
  return (
    <>
    <h2>create watch start stop and pause</h2>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     
        <h3>count :{count}</h3>
        <button onClick={()=>setStart(true)}>Start</button><button  onClick={()=>{setCount(0);setStart(false)}}> Reset</button><button onClick={()=>setStart(false)}>Pause</button>
    </div>
    </>
  )
}
export default Startresetpause