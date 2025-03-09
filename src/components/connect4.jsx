import React from "react";
import Board from "./Board";
import { useState , useRef, useEffect} from "react";


function Connect4(){
    const [gameState,setGameState] = useState(new Array(7).fill(new Array(6).fill("")));
    const [player,setPlayer] = useState("A")
    // ADD REF FOR CHECKING THE SIZE OF THE TILE const tileSizeRef = useRef(null);

    const handleTileClick = (coordinate) =>{
        setGameState((prevState) => {
            const newState = [...gameState];
            newState[coordinate.x] = [...newState[coordinate.x]]
            newState[coordinate.x][findBottom(coordinate.x)] = player;
            return newState;}
        );        

        if(player === "A"){setPlayer("B")}
        if(player === "B"){setPlayer("A")}

    }

    const findBottom = (x) => {
        for(let i = 5; i >= 0; i--){
            if (gameState[x][i] === ""){
                return i;
            }
        }
        return -1;
    }


    const handleReset = () => {
        setGameState(new Array(7).fill(new Array(6).fill("")));
    }

    return(
        <div className="w-full sm:w-[640px] bg-gray-800 aspect-square rounded-lg shadow-lg p-2">
            <div className="sm:w-full bg-gray-700 text-center rounded-lg mb-2 p-2">
                <h1 className="text-gray-200">CONNECT 4</h1>
            </div>
            <Board gameState={gameState} handleTileClick={handleTileClick}></Board>
            <div className="flex justify-center bg-gray-700 sm:w-full rounded-lg mt-2 p-2 gap-2 shadow-lg">
                
            </div>
            <button onClick={handleReset} className="w-full bg-gray-700 text-center rounded-lg mt-2 p-2 text-gray-200">
                RESET
            </button>
        </div>
        );
}

export default Connect4;