import React from "react";

function Tile({x,y, onClick, state}){
    return(
        <div onClick={()=>(onClick({x,y,state}))} className="bg-gray-500 w-full aspect-square shadow-lg rounded-lg mb-2">
            <p>
                {state}
            </p>
        </div>

    )
}

export default Tile;