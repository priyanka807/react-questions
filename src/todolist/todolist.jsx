import React, { use, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const Todolist = () => {
    const [todo,setTodo] = useState(JSON.parse(localStorage.getItem("todo"))||["english","computer","communication"])
    const [searchTerm,setSearchTerm] = useState("")
    const [editModal,setEditModal] = useState(false)
    const [editItems,setEditItems] = useState("")
    const [editIndex,setEditIndex] = useState()
    const [checkedStatus,setCheckedStatus] = useState(Array(todo.length).fill(false))
    const [allCheckboxStatus,setAllCheckboxStatus] = useState(false)
    localStorage.setItem("todo",JSON.stringify(todo))
    const handleAddTodo = (e)=>{
e.preventDefault();
if(searchTerm.trim().length>0){
   
    setTodo((prev)=>[...prev,searchTerm])
    localStorage.setItem("todo",JSON.stringify(todo))
}
setSearchTerm("")
    }
    const handleDelete = (index)=>{
const filterTodo = todo.filter((_,filterIndex)=>filterIndex!==index)

setTodo(filterTodo)
localStorage.setItem("todo",JSON.stringify(filterTodo))
    }
    const handleEdit = (items,index)=>{
setEditModal(true)
setEditItems(items)
setEditIndex(index)
    }
const handleEditSave = ()  =>{
if(editItems.trim().length>0){
    const updateTodo = todo.map((items,index)=>index===editIndex?editItems:items)
    
    setTodo(updateTodo)
    localStorage.setItem("todo",JSON.stringify(updateTodo))
}
setEditModal(false)
setEditIndex(null)
setEditItems("")
}
const handleCheckedCheckbox = (index)=>{
const updatedCheckedStatus = [...checkedStatus]
updatedCheckedStatus[index] = !updatedCheckedStatus[index]
setCheckedStatus(updatedCheckedStatus)

if(checkedStatus.some((checkboxStatus)=>!checkboxStatus)){
    setAllCheckboxStatus(false)
}else{
    setAllCheckboxStatus(true)
}
}

const handleDeleteAllCheckbox = () =>{


const allchecked = !allCheckboxStatus
setAllCheckboxStatus(allchecked)

const checkedCheckbox = checkedStatus.map(()=>allchecked)
setCheckedStatus(checkedCheckbox)

}
useEffect(()=>{
const allCheckedStatus = checkedStatus.every((checked)=>checked)
setAllCheckboxStatus(allCheckedStatus)
},[checkedStatus,allCheckboxStatus])
console.log(checkedStatus,'checkedStatus')
console.log(allCheckboxStatus,'allchecked')
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px",flexDirection:"column"}}>
        <div>
            <form  onSubmit={handleAddTodo}>
            <input type="text"  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button type="submit">Add</button>
            </form>
        </div>
      <div><input type="checkbox"  checked={allCheckboxStatus} id="deleteAll"  onChange={handleDeleteAllCheckbox}/><label htmlFor="deleteAll">deleteAll</label></div>  
{todo.length>0?todo.map((items,index)=>(

<div style={{marginTop:"10px"}} key={index}><input type='checkbox' checked={checkedStatus[index]} onChange={()=>handleCheckedCheckbox(index)}/><span style={{textDecoration:checkedStatus[index]?"line-through":""}}>{items}</span><button style={{marginLeft:"10px",color:checkedStatus[index]?"red":"darkorange"}} onClick={()=>handleDelete(index)}>< MdDelete/></button>
{editModal&&editIndex===index?<><input type="text" value={editItems}  onChange={(e)=>setEditItems(e.target.value)}></input><button onClick={()=>handleEditSave()}>Save</button></>:<><button style={{marginLeft:"10px"}} onClick={()=>handleEdit(items,index)}>< FaRegEdit/></button></>}
</div>

)):<div>No Data Found</div>}
    </div>
  )
}

export default Todolist