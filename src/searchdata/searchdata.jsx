import React, { useEffect, useState } from 'react'

const Searchdata = () => {
    const [searchTerm,setSearchTerm]  = useState("")
    console.log(searchTerm,'searchTerm')
    const [data,setData]  = useState([])
    const [filterData,setfilterData]  = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {setData(json);setfilterData(json)})  
    },[])

    const handleSearch = (searchValue)=>{
const targetId = Number(searchValue)

const filtered = data.filter((filterdata,index)=>{
if(filterdata.id===targetId||searchValue===""){
    return filterdata

}else{
    return filterdata.title.includes(searchValue)
}
})
return setfilterData(filtered)
    }

  return (
    <>
    
        <div  className=''  style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'30px',flexDirection:'column'}}>
<input type="text" placeholder="...search here"  onChange={(e)=>handleSearch(e.target.value)}/>
{filterData&&filterData.length>0?filterData.map((items,index)=>(<><div >{items.id}<span style={{marginLeft:'10px'}}>{items.title}</span></div></>)):(<div>No Data Found</div>)}
      </div>


    </>
  )
}

export default Searchdata