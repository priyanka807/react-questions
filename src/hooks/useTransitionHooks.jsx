import React, { useEffect ,useState,useTransition} from 'react'

const UseTransitionHooks = () => {
    const [data,setData] = useState([])
    const [pending,setPending] = useState(false) 
    const [error,setError] = useState("")
    const [isPending,startTransition] = useTransition()
    console.log(isPending,startTransition,'isPending,startTransition')
    // useEffect(()=>{
    //     async  function fetchApi(){
    //         try{
    //             setPending(true)
    //           await  fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(result=>
    //                 {
    //                     setData(result)
    //                 }
                 
    //                )
    //                setPending(false)
    //           }catch(error){
    //             console.log(error,'error')
    //     setError("error")
    //     setPending(false)
    //           }
    //     }
  
    //     fetchApi()
 
    // },[])
    useEffect(()=>{
        
            async  function fetchApi(){
                try{
                    setPending(true)
                  await  fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(result=>
                        {
                            setData(result)
                        }
                     
                       )
                     
                  }catch(error){
                    console.log(error,'error')
            setError("error")
          
                  }
            }
            
          
            startTransition( ()=> fetchApi())
      
 
    },[])
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"60px",flexDirection:"column"}}>

        {isPending?<><div>...loading</div></>:data.map((data)=>(
            <div key={data.id}><span style={{marginRight:"20px"}}>{data.id}</span><span>{data.title}</span></div>
        ))}
        {error?"Failed to show data ":null}
    </div>
  )
}

export default UseTransitionHooks