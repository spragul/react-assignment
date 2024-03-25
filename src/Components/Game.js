// import React, { useEffect, useState } from "react";
// import Topbar from "./Topbar";

// function Game() {
//   const [score, setScore] = useState(0);
//   const [boxPosition, setBoxPosition] = useState({});

//   // Define an array of nine predetermined positions
//   const positions = [
//     { top: 50, left: 50 },
//     { top: 50, left: 200 },
//     { top: 50, left: 350 },
//     { top: 200, left: 50 },
//     { top: 200, left: 200 },
//     { top: 200, left: 350 },
//     { top: 350, left: 50 },
//     { top: 350, left: 200 },
//     { top: 350, left: 350 }
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       moveBox();
//     }, 1000); // Move box every 1 second

//     return () => clearInterval(intervalId); // Clean up the interval when component unmounts
//   }, []); // Empty dependency array ensures that the effect runs only once after the initial render

//   const moveBox = () => {
//     // Randomly select one of the predetermined positions
//     const randomIndex = Math.floor(Math.random() * positions.length);
//     setBoxPosition(positions[randomIndex]);
//   };

//   const handleClick = () => {
//     setScore(score + 1);
//     moveBox(); // Move box when clicked
//   };

//   return (
//     <>
//       <Topbar />
//       <div className="game-container">
//       <h1>Click My Box Game</h1>
//       <div className="box" style={{ top: boxPosition.top, left: boxPosition.left }} onClick={handleClick}>
//         Click Me!
//       </div>
//       <div className="score">Score: {score}</div>
//       </div>
//     </>
//   );
// }

// export default Game;

import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";

function Game() {
  const [score, setScore] = useState(0);
  const [list, setList] = useState([]);

  function starts() {
   const stop= setInterval(() => {
      // Function to generate random number
      function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let a = randomNumber(0, 8);
      let arr = [];
      for (let i = 0; i < 9; i++) {
        if (a == i) {
          arr.push("Click");
        } else {
          arr.push("");
        }
      }
      setList(arr);
    }, 2000);
    setTimeout(()=>{
      clearInterval(stop)
  },5000)
  }
    const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="game">
      <h1>Game</h1>
      <button onClick={()=>starts()}>Start</button>
      <h1>Score:{score}</h1>
      <div className="game-container">
        {list.map((val, index) => (
          <p key={index} className="boxs" onClick={handleClick}>{val}</p>
        ))}
      </div>
      
    </div>
  );
}
export default Game;
