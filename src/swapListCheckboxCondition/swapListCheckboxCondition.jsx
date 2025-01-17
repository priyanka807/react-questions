import React from 'react'
import { useState } from 'react'

const SwapListCheckboxCondition = () => {

    const [list1,setList1] = useState([{id:"1",items:"items1"},{id:"2",items:"items1"},{id:"3",items:"items1"},{id:"4",items:"items1"}])
    const [list2,setList2] = useState([{id:"1",items:"items2"},{id:"2",items:"items2"},{id:"3",items:"items2"},{id:"4",items:"items2"}])
    const [checkboxStaus,setCheckboxStatus] = useState(Array(list1.length).fill(false))
    console.log(checkboxStaus[4],'undefined')
    const handleCheckbox = (checkboxId)=>{
        console.log(checkboxId,'checkboxId')
const updateCheckboxStaus = [...checkboxStaus]
updateCheckboxStaus[checkboxId] = !updateCheckboxStaus[checkboxId]
setCheckboxStatus(updateCheckboxStaus)

    }
 
    const handleSwap = (c)=>{
        let updateList1 = [...list1]
        let updateList2 = [...list2]
     checkboxStaus.forEach((status,index)=>{
       if(status){
const listUpdate = updateList1[index]  
// in first list get l list1 hold that value in next step take same id of another list provide same id of list in next step update 1 provide hold value automatically reverse logic work here again 
updateList2[index] = updateList1[index]
updateList1[index] = listUpdate

       }
    })


}
    return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px",marginTop:"30px"}}>

  <div>
  {list1.map((items,index)=>(
       <div key={items.id}>
       <input type="checkbox"  checked={checkboxStaus[index]} value={items.items} onChange={()=>handleCheckbox(items.id-1)} name={items.items} /> <label htmlFor={items.items}>{items.id}  {items.items}</label>
       </div>
    ))}
  </div>
<div>
<button onClick={()=>handleSwap()}>Swap</button>
</div>
<div>
{list2.map((items)=>(
       <div key={items.id}>
       <input type="checkbox" name={items.items} /> <label htmlFor={items.items}>{items.id}  {items.items}</label>
       </div>
    ))}

</div>
    </div>
    </>
  )
}

export default SwapListCheckboxCondition