
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Carousal = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const [data,setData] = useState([])
    const [updateData,setUpdateData] = useState([])
    const perpage = 3
    // const itemLimit = Math.ceil(data.length/perpage)
  
    useEffect(()=>{
        async function fetchApi (){
    const result =await   axios.get("https://jsonplaceholder.typicode.com/todos")
    setData(result.data.slice(0,21))
    setUpdateData(result.data.slice(0,3))
}  
fetchApi ()   
    },[])


    useEffect(()=>{
 setUpdateData(data.slice(currentIndex,currentIndex+3))  

    },[currentIndex])

    const handlePrev = ()=>{
     
        if(currentIndex>1){
            setCurrentIndex((prev)=>(prev-perpage)%data.length)    
        }
     
    }
 const handleNext = ()=>{
    setCurrentIndex((prev)=>(prev+perpage)%data.length) 
    }
   console.log(currentIndex,'currentIndex')
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px",width:"100%",alignItems:"center",marginTop:"30px"}}>
       <button onClick={handlePrev}>Prev</button>
        {updateData.map((items)=>(
            <div  style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"33.33%",alignItems:"center",height:"200px",background:"azure"}}>
<h2>{items.id}</h2>
<h4>{items.title}</h4>
            </div>
        ))}
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Carousal