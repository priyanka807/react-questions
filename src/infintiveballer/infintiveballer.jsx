import React, { useDeferredValue, useEffect, useState } from 'react'
import '../index.css';

const Infintiveballer = () => {
  const [currentArrowIndex,setCurrentArrowIndex] = useState(0)
  const [index,setIndex] = useState(0)
  const [isRunning,setIsRunning] = useState(false)

const itemsLength = 3
useEffect(()=>{
  let interval;
 interval = setInterval(()=>{
  if(isRunning){
    setCurrentArrowIndex((prev)=>(prev+1)%itemsLength)
  setIndex(currentArrowIndex)
  }
 },1000)
    return ()=>clearInterval(interval)
},[currentArrowIndex,isRunning,itemsLength])
console.log(index,'index')
console.log(currentArrowIndex,'currentArrowIndex')

  return (
    <>
    <h2>Infintiveballer</h2>
    <div  className='infinitiveballer'  style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'30px'}}>
{/* {[1,2,3].map((items,index)=>(
<div  className={currentArrowIndex===index?'infintiveballeractive':''} key={index}>{items}{currentArrowIndex===index&&<i class="fa-solid fa-arrow-right " onClick={()=>setIsRunning(!isRunning)}></i>}</div>

))} */}

<div  className={currentArrowIndex===0?'infintiveballeractive':''}>1{currentArrowIndex===0&&<i class="fa-solid fa-arrow-right " onClick={()=>{setIsRunning(!isRunning)}}></i>}</div>
<div  className={currentArrowIndex===1?'infintiveballeractive':''}>2{currentArrowIndex===1&&<i class="fa-solid fa-arrow-right " onClick={()=>{setIsRunning(!isRunning)}}></i>}</div>
<div className={currentArrowIndex===2?'infintiveballeractive':''}>3{currentArrowIndex===2&&<i class="fa-solid fa-arrow-right " onClick={()=>{setIsRunning(!isRunning)}}></i>}</div>
</div>

    </>
  
  )
}

export default Infintiveballer