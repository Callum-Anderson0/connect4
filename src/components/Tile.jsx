import React from "react";
import { motion } from "framer-motion";

function Tile({x,y, onClick, state}){
    return(
        <div onClick={()=>(onClick({x,y,state}))} className="bg-gray-500 w-full aspect-square shadow-lg rounded-lg mb-2">
            {state === "A" && (
                <motion.div className="bg-red-700 w-full h-full rounded-full" initial={{y: -10 }} animate={{y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 10  }}></motion.div>)}
            {state === "B" && (
                <motion.div className="bg-yellow-700 w-full h-full rounded-full" initial={{y: -10}} animate={{y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 10  }}></motion.div>)}
        </div>

    )
};

export default Tile;