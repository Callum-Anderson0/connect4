import React from "react";
import Board from "./Board";
import { useState } from "react";


function Connect4(){
    const [gameState,setGameState] = useState(new Array(7).fill(new Array(6).fill("")));

    const handleTileClick = (coordinate) =>{
        console.log(gameState,coordinate,gameState[coordinate.x][coordinate.y])
        setGameState((prevState) => {
            const newState = [...gameState];
            newState[coordinate.x] = [...newState[coordinate.x]]
            newState[coordinate.x][coordinate.y] = "hello"
            return newState;}
        );
        
    }

    return(
        <div className="w-full sm:w-[640px] bg-gray-800 aspect-square rounded-lg shadow-lg p-2">
            <div className="sm:w-full bg-gray-700 text-center rounded-lg mb-2 p-2">
                <h1 className="text-gray-200">CONNECT 4</h1>
            </div>
            <Board gameState={gameState} handleTileClick={handleTileClick}></Board>
        </div>
        );
}

export default Connect4;