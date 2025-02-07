import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from "react"

const CountriesAndCities = () => {
    const [country,setCountry] = useState("india")
    const data = [{country:'india',cities:["delhi","mumbai"]},{country:'pakistan',cities:["lahore","krachi"]},{country:'america',cities:["newyork","losangles"]}]
 const filterCities = data.find((cities)=>cities.country===country)
    const [city,setCity] = useState(filterCities.cities[0])

    useEffect( ()=>{
        async  function fetchApi (){
            try{
                const response =await  axios.get("https://jsonplaceholder.typicode.com/todos")
                console.log(response.data,'response')
                      }catch(error){
                        console.log(error,'error')
                      } 
        }
        fetchApi ()
    },[])
    return (
    <>
    <select name="countries" id="countries"  value={country}   onChange={(event)=>setCountry(event.target.value)}>
       {data.map((countries,index)=>(
<option   key={index}  > {countries.country}</option>
       ))} 
    </select>


    <select name="countries" id="countries"  value={city}   onChange={(event)=>setCity(event.target.value)}>
       {filterCities.cities&&filterCities.cities.length>0&&filterCities.cities.map((cities,index)=>(
<option   key={index}  > {cities}</option>
       ))} 
    </select>
    </>
  )
}

export default CountriesAndCities