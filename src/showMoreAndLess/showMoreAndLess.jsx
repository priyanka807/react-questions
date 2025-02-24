import React, { useEffect, useState } from 'react'

const ShowMoreAndLess = () => {
  const [data,setData] = useState([])
  const [title,setTitle] = useState("")
  const [id,setId] = useState(null)
  const [titleExpanded,setTitleExpanded] = useState(false)

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        setData(json.slice(0,20));
    })  
},[])

const handleTitleLength =(title,id)=>{
setId(id)
  // if(titleExpanded){
  //   setTitle(`${title.slice(0,30)}  `)
  // }else{
  //   setTitle(title)
  // }
}
useEffect(()=>{
  console.log(title,'titleoutside')
},[title])

  return (

    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',margin:'30px'}}>
{data.map((data)=>(
            
            <h2 key={data.id}>{data.id}  
      {data.title.length>30?<>{titleExpanded&&data.id===id?data.title:data.title.slice(0,20)}     <span  onClick={()=>{setTitleExpanded(!titleExpanded);handleTitleLength(data.title,data.id)}} style={{padding:'0px 30px'}}> {titleExpanded&&data.id===id?'Show Less':'...Show More '}</span></>:data.title} 

             {/* {data.title.length>30?<>{titleExpanded&&data.id===id?title:data.title.slice(0,30)}<span  onClick={()=>{setTitleExpanded(!titleExpanded);handleTitleLength(data.title,data.id)}} style={{padding:'0px 30px'}}> {titleExpanded&&data.id===id?'Show Less':'...Show More '}</span></>:data.title} */}
              </h2>
                    ))}
    </div>
  )
}

export default ShowMoreAndLess