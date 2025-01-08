import React, { useEffect, useState } from 'react'

const Debouncing = () => {
    const [searchTerm,setSearchTerm]  = useState("")

useEffect(()=>{

    let timeout;
    timeout = setTimeout(()=>{
    if(searchTerm.toLowerCase().trim().length>0){
        console.log(searchTerm,'searchTerm')
    }
    },1000)

    console.log(timeout,'addtimeout')
   return ()=> {clearTimeout(timeout);console.log(timeout,'cleartimeout') }
},[searchTerm])

  return (
    <>
  <input type=""  placeholder='...search here' onChange={(e)=>setSearchTerm(e.target.value)}/>  
    </>
  )
}

export default Debouncing