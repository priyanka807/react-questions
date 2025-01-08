import React, { useEffect, useState } from 'react'
import UseMemoHooks from './useMemoHooks'

const Products = () => {
    const [product,setproduct] = useState([])
    useEffect(()=>{
      
        console.log('unless we dont use state in useeffect without dependency it will not go on infinitive loop ')
        fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(result=>
        {
            setproduct(result)
        }
       )
 
    },[])
  return (
    <>
    <UseMemoHooks  product={product}/>
    </>
  )
}

export default Products