//useeffect fun behave aschronously , perform side effects ,fteching data from api , use cleanup function 
//perform side effetcs such as fetching data ,subscrbing to events (when perform cleanup fun on any events ,)
//intracting with the dom ,cleanup resources when component  unmowunt or dependency change 
import React, { useCallback, useEffect, useMemo, useState } from 'react'

const UseEffectHooks = () => {
const [data,setData] = useState([])

    useEffect(()=>{
      
        console.log('unless we dont use state in useeffect without dependency it will not go on infinitive loop ')
        fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(result=>
        {
            setData(result)
        }
       )
 
    },[])
    console.log(data,'data')

  return (
    <>
<h2>Use Of  UseEffectHooks:</h2>



</>
  )
}

export default UseEffectHooks