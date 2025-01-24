
import React from 'react'

const Slider = ({data}) => {
    // console.log(title,'title')
    console.log(data,'data')
  return (
    <>
    {data.map((data,index)=>(
<div key={index}>
<h2>{data.category}</h2>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'30px'}}>
{data.data.map((detail)=>(
  <div  >
      <h3>{detail.title}</h3>
      <h6>{detail.des}</h6>
  </div>

))}
</div>


</div>

    ))}
    </>
//     <div>{title}
//     <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'30px'}}>
//     {data.map((item)=>(
// <div ><h2>{item.title}</h2><h2>{item.des}</h2></div>
//     ))}
//     </div>
//     </div>
  )
}

export default Slider