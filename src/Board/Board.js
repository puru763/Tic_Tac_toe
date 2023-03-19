import React, { useState } from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = () => {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isxturn, setxturn] = useState(true);

  const checkwinners = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkwinners();

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isxturn ? "x" : "o";
    setstate(copyState);
    setxturn(!isxturn);
  };

  const handleplayagain = ()=>{
    setstate(Array(9).fill(null));

  }

  return (
    <div>
      <div className="board-container">
        {isWinner ? (
          <><h1> <strong> {isWinner}</strong>  won the match</h1>  <br /><br />   <button    style={{backgroundColor:"white"  ,  color:"black" , height:"10%"  , width:"10%"}} onClick={handleplayagain}>Play Again</button></>
        ) : (
          <>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>

            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>

            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>


            <br />
            <br />
            <button   style={{backgroundColor:"white"  ,  color:"black"}} onClick={handleplayagain}>Play Again</button>
          </>

          
        )}
      </div>
    </div>
  );
};

export default Board;
