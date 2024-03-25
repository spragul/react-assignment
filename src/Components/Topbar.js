import React from 'react'
import { useNavigate } from 'react-router-dom'

function Topbar() {
    const navigate=useNavigate()
  return (
    <div className='nav-button-group'>
        <button className='nav-button' onClick={()=>navigate("/element")}> element</button>
        <button className='nav-button' onClick={()=>navigate("/nestedlist")}>Nested list</button>
        <button className='nav-button' onClick={()=>navigate("/infinitescroll")}>Infinite scroll</button>
        <button className='nav-button' onClick={()=>navigate("/game")}>Game</button>
    </div>
  )
}

export default Topbar