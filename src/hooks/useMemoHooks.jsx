//optimize the performance by memorized the result /value of expensive calculation /computation ex : list of the item  need  filter  search result and sorting frequently
//prevent unwanted function call /uncessarry recalculation of derrived data during renders

import React, { useState ,useMemo, useEffect} from 'react'
import Products from './products'

const UseMemoHooks = ({product}) => {
    const [searchTerm,setSearchTerm] = useState("")
    const [filter,setFilter] = useState([])
    const [count,setCount] = useState(0)
console.log(count,'count')
 const filteredData =    useMemo(()=>{

    return product.filter((item,index)=>{
      const number = Number(searchTerm)
      console.log(number,'number')
      if(number===item.id||searchTerm===""){
        return item
      }else{
        return item.title.includes(searchTerm)
      }

    })
    },[searchTerm,product])
console.log(filteredData,'filteredData')

  // useEffect(()=>{
  //   const filteredData =     product.filter((item,index)=>{
  //       const number = Number(searchTerm)
  //       console.log(number,'number')
  //       if(number===item.id||searchTerm===""){
  //         return item
  //       }else{
  //         return item.title.includes(searchTerm)
  //       }
  
  //       })
  //      setFilter(filteredData)
  //       return  
  //       },[searchTerm,product])

     
  return (
    <>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",flexDirection:"column"}}>
<input type="text"  onChange={(e)=>setSearchTerm(e.target.value)}/>
{filteredData.length>0?filteredData.map((item,index)=>(<>
    <div key={index} style={{background:"azure",padding:"5px" ,margin:"5px" ,textAlign:"center"}}>
   <span style={{paddingRight:"20px"}}>{item.id}</span><span>{item.title}</span>
</div></>)):(<><div style={{background:"azure",padding:"5px" ,margin:"5px" ,textAlign:"center"}}>No Data Found</div></>)}
</div>

<button  onClick={()=>setCount((prev)=>prev+1)}>count : {count}</button>
    </>
  )
}

export default UseMemoHooks