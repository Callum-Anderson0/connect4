import { React, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"


function Tile({x,y, onClick, state}){
    const divRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    // Use ResizeObserver entries for more reliable measurements
    const updateSize = (entries) => {
        for (const entry of entries) {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
            console.log('Current size:', width, height);
        }
    };

    useEffect(() => {
        const resizeObserver = new ResizeObserver(updateSize);
        const currentRef = divRef.current;
        
        if (currentRef) {
            resizeObserver.observe(currentRef, { box: 'content-box' });
        }

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef);
            }
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={divRef} onClick={() => {onClick({x, y, state}); console.log(size)}} className="bg-gray-500 w-full aspect-square shadow-lg rounded-lg mb-2">
            {state === "A" && (
                <motion.div className="bg-red-700 w-full h-full rounded-full" initial={{y: -10 }} animate={{y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 10  }}></motion.div>)}
            {state === "B" && (
                <motion.div className="bg-yellow-700 w-full h-full rounded-full" initial={{y: -10}} animate={{y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 10  }}></motion.div>)}
        </div>
    )
}

export default Tile;