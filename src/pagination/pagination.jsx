import React, { useEffect, useState } from 'react'
import '../index.css'
const Pagination = () => {
    const [data,setData]  = useState([])
    const [filterData,setfilterData]  = useState([])
    const [currentPage,setCurrentPage]  = useState(1)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {setData(json.slice(0,20));setfilterData(json)})  
    },[])

const pageLimit = 20 
const totalPage = Math.ceil(filterData.length/pageLimit)  
const lastPage = currentPage * pageLimit    
const firstPage = lastPage - pageLimit  

    useEffect(()=>{
    
const updatedPage = filterData.slice(firstPage ,lastPage)
setData(updatedPage)
    },[filterData,currentPage])

    console.log(currentPage,'...........currentPage')
    const handlePrevious = ()=>{
if(currentPage>1){
    setCurrentPage((prev)=>prev-1)
}
    }
    const handleNext = ()=>{
        if(currentPage<totalPage){
            setCurrentPage((prev)=>prev+1)
        }
    } 
  return (
    <>
    
  
        <div  className=''  style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
       <button onClick={()=>handlePrevious()}  className={currentPage===1?'disabled':''}>Previous</button>              
{[1,2,3,4,5,6,7,8,9,10].map((items,index)=>(<><button onClick={()=>setCurrentPage(items)}>{items}</button></>))}
{/* disabled={currentPage>=10?true:false} */}
<button onClick={()=>handleNext()}  className={currentPage===10?'disabled':''} >Next</button>  
      </div>
      <div   style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

{data&&data.length>0&&data.map((data)=>(
<div  style={{display:'flex',gap:'20px'}}>
<h1>{data.id}</h1>
    <h2>{data.title}</h2>
</div>
))}
</div>

{/* {['/','*','-','+','0','.','1','2','']} */}
    </>
  )
}

export default Pagination