import React from 'react'
import "./box.css"

export default function Box({value, id, onClick}) {
  return (
    <button key={id} className={`box ${value === "X" ? "x" : "o"}`} onClick={onClick}>
        {value}
    </button>
  )
}
