import React, { useEffect, useState } from 'react'

const Stoppauserest = () => {
    const [isStart,setIsStart] = useState(false)
    const [count,setCount] = useState(0)
    useEffect(()=>{
        let interval ;

interval = setInterval(()=>{
    if(isStart){
setCount((prev)=>prev+1)
}
},100)


return ()=>{clearInterval(interval);console.log(interval,'interval outside')}

    },[isStart,count])
  return (
    <div>
        <div>count : {count}</div>
        <button  onClick={()=>setIsStart(true)}>Start</button>
        <button  onClick={()=>setIsStart(false)}>Pause</button>
        <button onClick={()=>{setIsStart(false);setCount(0)}}>Stop</button>
    </div>
  )
}

export default Stoppauserest