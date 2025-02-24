
import React, { useEffect } from 'react'
import { useState } from 'react'

 const CleanupFunction = () => {
const [windowWidth,setWindowWidth]  = useState(window.innerWidth)

   useEffect(()=>{
    window.addEventListener('resize',()=>{setWindowWidth(window.innerWidth)})
    console.log(windowWidth,'add')
  
return ()=>{  ;window.removeEventListener('resize',()=>{setWindowWidth(window.innerWidth)});
console.log(windowWidth,'remove')}
   },[windowWidth]) 
  return (
    <div>
      resize : {windowWidth}
    </div>
  )
}

export default CleanupFunction

