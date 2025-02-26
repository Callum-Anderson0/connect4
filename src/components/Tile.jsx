import React from "react";

function Tile({id, onClick}){
    return(
        <div onClick={()=>(onClick(id))} className="bg-gray-500 w-full aspect-square shadow-lg rounded-lg mb-2"></div>

    )
}

export default Tile;