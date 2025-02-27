import React from "react";
import Tile from "./Tile";


function Board({gameState, handleTileClick}){
    return(
        <div className="bg-gray-700 grid grid-cols-7 gap-2 w-full rounded-lg shadow-lg p-4 pt-4 pb-4">
            {gameState.map((column,colIndex) => (
                <div className="bg-gray-700 h-full ">
                    {column.map((value,rowIndex) => (
                        <Tile onClick={handleTileClick} x={colIndex} y={rowIndex} state={gameState[colIndex][rowIndex]}>
                        </Tile>))
                    }
                </div>))
            }
        </div>
        );
}

export default Board;