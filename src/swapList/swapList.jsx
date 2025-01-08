import React, { useState } from 'react'

const SwapList = () => {

    const initialList1 = [{id:"1",list:"list1"},{id:"2",list:"list1"},{id:"3",list:"list1"},{id:"4",list:"list1"}]
    const initialList2 = [{id:"1",list:"list2"},{id:"2",list:"list2"},{id:"3",list:"list2"},{id:"4",list:"list2"}]
    const [list1, setList1] = useState(initialList1);
    const [list2, setList2] = useState(initialList2);
    const [checkboxStatuses,setCheckboxStatuses] = useState(Array(list1.length).fill(false))

const handleCheckbox = (index)=>{
let updateCheckboxStatus = [...checkboxStatuses]
updateCheckboxStatus[index] = !updateCheckboxStatus[index]
setCheckboxStatuses(updateCheckboxStatus)

}
const handleSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];

    checkboxStatuses.forEach((status, index) => {
      if (status) {
       
        const temp = updatedList1[index];
        updatedList1[index] = updatedList2[index];
        updatedList2[index] = temp;
      }
    });
    setList1(updatedList1);
    setList2(updatedList2);

}
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>

    <h2>Swap List</h2>
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap:"30px"}}>
 <div >
{list1.map((list, index) => (
      <div  key={index}>
      <input type="checkbox" checkbox={checkboxStatuses[index]?'checked':''}  onChange={()=>handleCheckbox(index)} />{list.id} {list.list}
      
      </div>
    ))}
</div>

<div><button onClick={()=>handleSwap()}>Swap </button></div>
<div>
{list2.map((list, index) => (
      <div key={index}>
     {list.id} {list.list}
      
      </div>
    ))}
</div>
  
    </div>  

   
  </div>
  )
}

export default SwapList