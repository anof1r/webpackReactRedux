import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => navigate(-1)}>BACK</button>
        Card component
    </div>
  )
}

export default Card