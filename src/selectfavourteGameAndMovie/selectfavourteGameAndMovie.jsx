import React, { useState } from 'react'

const SelectfavourteGameAndMovie = () => {
    const [selectGame,setSelectGame] = useState("")
    const [selectMovie,setSelectMovie] = useState("")
    const game = ["hockey","cricket","badmintan","tennis","basketball"]
    const movie = ["avatar","titanic","avengers","thegodfather","nowhere"]
    console.log(selectGame,'selectGame')
    console.log(selectMovie,'selectMovie')
  return (
    <div  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"60px"}}>
       <h2>Your favourtite game is {selectGame}  and movie {selectMovie}</h2>
        {game.map((game)=>(
     <div><input type="radio" name="favourite_game" id={game}  value={selectGame} onChange={()=>setSelectGame(game)}/><label htmlFor={game}>{game}</label></div>
        ))}
        <div style={{marginTop:"60px"}}>
        {movie.map((movie)=>(
     <div ><input type="radio" name="favourite_movie" id={movie}  value={selectMovie} onChange={()=>setSelectMovie(movie)}/><label htmlFor={movie}>{movie}</label></div>
        ))}
        </div>
      
    </div>
  )
}

export default SelectfavourteGameAndMovie