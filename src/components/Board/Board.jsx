import React from 'react'
import Box from '../Box/Box'
import "./board.css"

export default function Board({board, onClick, id}) {
  return (
    <div className='board'>
       {board.map((item, id) => {
             return <Box id={id} value={item} onClick={() => item === null && onClick(id)}/>
       })}
      
    </div>
  )
}
