import React from 'react';
import {useNavigate} from "react-router-dom"

function Firstpage() {
   const navigate =useNavigate();
  return (
    <div>
        <div>
            <button onClick={()=>navigate('/element')}>Element Transfer</button>
        </div>
        <div>
            <button onClick={()=>navigate('/nestedlist')}> Nested List component</button>
        </div>
        <div>
            <button onClick={()=>navigate('/infinitescroll')}>Infinite scroll</button>
        </div>
        <div>
            <button onClick={()=>navigate('/game')}>Game (Points will be awarded if clicked on the right box)</button>
        </div>

    </div>
  )
}

export default Firstpage