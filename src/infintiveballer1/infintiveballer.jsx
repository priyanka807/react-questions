import React, { useState,useEffect } from 'react' 
import '../App.css'
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Infintiveballer = () => {
    const [currentBox,setCurrentBox] = useState(0)
    const [isClick,setIsClick] = useState(false)
    const itemLength = 3
    useEffect(()=>{
        let interval ;
        if(isClick) {
        interval =     setInterval(()=>{
                setCurrentBox((prev)=>(prev+ 1 + 3)% itemLength)
       
            },1000)
    
        }
 
      return ()=>clearInterval(interval)
    },[isClick,currentBox])
 
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px",gap:"20px"}}>
       
{
    [1,2,3].map((items,index)=>(
        <>
        <div onClick={()=>setIsClick(!isClick)} key={index} style={{width:"200px",height:"100px"}}  className={`box  ${currentBox===index?"gray_background":'green_background'}`}>
            {/* {items} {currentBox===index&&<i class="fa-solid fa-arrow-right" style={{marginLeft:"20px"}}  ></i>} */}
            {items} {currentBox===index&&<FaArrowRight style={{marginLeft:"20px"}}/>}

        </div>
        </>
        ))
}
    </div>
  )
}

export default Infintiveballer