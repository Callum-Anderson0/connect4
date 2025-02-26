import React from "react";
import Tile from "./Tile";


function Board({gameState, handleTileClick}){
    return(
        <div className="bg-gray-700 grid grid-cols-7 gap-3 w-full aspect-square rounded-lg shadow-lg p-4 pt-6 pb-6">
            {gameState.map((value,colIndex,column) => (
                <div className="bg-gray-700 h-full ">
                    {column.map((value,rowIndex) => (
                        <Tile onClick={handleTileClick} id={rowIndex*7+colIndex}>
                        </Tile>))
                    }
                </div>))
            }
        </div>
        );
}

export default Board;