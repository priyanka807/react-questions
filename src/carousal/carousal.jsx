import React, { useEffect, useState } from 'react'
import '../index.css'
const Carousal = () => {
    const [data,setData]  = useState([])
    const [filterData,setfilterData]  = useState([])
    const [currentPage,setCurrentPage]  = useState(0)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {setData(json.slice(0,3));setfilterData(json.slice(0,21))})  
    },[])
const datalength = filterData.length
const showDataPerPage = 3
  

    console.log('')
    const handlePrevious = ()=>{
        if(currentPage>1){
            setCurrentPage((prev)=>(prev-showDataPerPage)%datalength)
        }     
    }
    const handleNext = ()=>{
        console.log('this function will execute')
      setCurrentPage((prev)=>(prev+showDataPerPage)%datalength)
    } 
    console.log(currentPage,'currentpage')
    useEffect(()=>{
    const updatedPage = filterData.slice(currentPage,currentPage+showDataPerPage)
    setData(updatedPage)
    },[currentPage,filterData])
    console.log(currentPage,'currentPage')
  return (
    <>
    
  
        <div  className=''  style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px',gap:'10px'}}>
       <button onClick={()=>handlePrevious()}  className={currentPage===0?'disabled':''}>Previous</button>              
{data.map((items,index)=>(<><div  key={index} style={{display:'flex',justifyContent:'center',alignItems:'center',width:'300px',height:'250px',backgroundColor:'#8ccfcf'}}>{items.id}</div></>))}
<button onClick={()=>handleNext()}  className='' >Next</button>  
      </div>
    </>
  )
}

export default Carousal