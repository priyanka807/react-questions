import React, { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {
    const [useData,setUserData]  = useState({name:'',email:'',phone:'',message:''})
    const handleForm = (e)=>{
        // console.log(e.target.name,'e.target.name')
e.preventDefault();
console.log(useData,'useData')
    }
    // useEffect(()=>{
    
    // },[useData])
   
  return (
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',margin:'30px'}}>

        <form action=""   onSubmit={(e)=>handleForm(e)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"   name="name"  id="name"  onChange={(e)=>setUserData({...useData,[e.target.name]:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"   name="email"  id="email"  onChange={(e)=>setUserData({...useData,[e.target.name]:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="number"   name="phone"  id="phone" onChange={(e)=>setUserData({...useData,[e.target.name]:e.target.value})}/>
            </div>
            <div >
                <label htmlFor="message">Message</label>
                <input type="text"   name="message"  id="message"  onChange={(e)=>setUserData({...useData,[e.target.name]:e.target.value})}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
