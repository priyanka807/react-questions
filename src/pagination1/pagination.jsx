import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Pagination = () => {
    // const [currentIndex,setCurrentIndex] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [data,setData] = useState([])
console.log(currentPage,'currentpage')
    const totalPages = 20
    const pageLimit = 10

    const lastPage = currentPage*totalPages
      const   firstPage = lastPage - totalPages
    console.log(firstPage,'firstPage')
    console.log(lastPage,'lastPage')
    useEffect(()=>{
       const fetchData = async()=>{
const result =await axios.get("https://jsonplaceholder.typicode.com//todos")

setData(result.data.slice(firstPage,lastPage))
       } 
       fetchData()
    },[currentPage,firstPage,lastPage])

    const handlePrev = ()=>{
if(currentPage>1){
  setCurrentPage((prev)=>prev-1)
}
    }
    const handleNext = ()=>{
      if(currentPage<=10){
        setCurrentPage((prev)=>prev+1)
      } 
    }
    console.log(data,'data')
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"20px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:"20px"}}>
          <button onClick={handlePrev} style={{padding:"10px"}}  disabled={currentPage===1?true:false}>Prev</button>
           {[1,2,3,4,5,6,7,8,9,10].map((currentpage,index)=>(
<button key={index}  onClick={()=>setCurrentPage(currentpage)} style={{background:currentpage===currentPage?'gray':'',color:currentpage===currentPage?'darkblack':'',padding:'10px'}}  className={` ${currentpage===1 }`}>{currentpage}</button>
           ))} 
           
        <button  disabled={currentPage>=10?true:false} onClick={handleNext} style={{padding:"10px"}}>Next</button>
        </div>
{data&&data.length>0?data.map((data)=>(
    <div key={data.id}><span style={{marginRight:"20px"}}>{data.id}</span><span>{data.title}</span></div>
)):    <div >No Data Found</div>}
    </div>
  )
}

export default Pagination