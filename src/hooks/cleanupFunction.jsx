import React, { useState ,useEffect} from 'react'

const Cleanupfunction = () => {
    const [count,setCount] = useState(window.screen.width)
    
  const actualWidth = ()=>{
    setCount(window.innerWidth)
    console.log(window.innerWidth,'width')
  }
  
  useEffect(()=>{
    window.addEventListener("resize",actualWidth)
 
   return ()=>{
     window.removeEventListener("resize",actualWidth)}
  },[count])
  return (
    <div>cleanupfunction
        <h2>the actual size of the window is :</h2>
        <h3>{count}</h3>
    </div>
  )
}

export default Cleanupfunction