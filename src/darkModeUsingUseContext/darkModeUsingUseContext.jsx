import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from './context'
import Store from './store'

const DarkModeUsingUseContext = () => {
   const {darkMode,setDarkMode}  = useContext(DarkModeContext)
  return (
    <>
     <button onClick={()=>setDarkMode(!darkMode)}>Change Theme</button>
     <div   style={{width:"300px",display:'flex',justifyContent:'center',alignContent:'center',marginTop:'30px',flexDirection:'column',background:darkMode?'black':'white',color:darkMode?"white":"black"}}>
       
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga tempore eos nemo odio quia natus fugit labore dolor repudiandae eligendi, dicta, optio blanditiis recusandae, officiis fugiat aut veritatis in?</p>
      
   </div>
    </>
  
  )
}

export default DarkModeUsingUseContext