import React from 'react'
import "./scoreBoard.css"

export default function ScoreBoard({xScore, oScore, tie, playing}) {
  return (
    <div className='scoreboard'>
        <span className={`x-score ${playing === true ? "xPlay" : ""}`}>X - {xScore}</span>
        <span className={`o-score ${playing === false ? "oPlay" : ""}`}>O - {oScore}</span>
        <span className='tie'>Tie - {tie}</span>  
    </div>
  )
}
