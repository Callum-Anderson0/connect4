import { useState, React } from "react";
import { useDrag } from "@use-gesture/react"


function Dropper({colour,tileSize}){
    const [position, setPosition] = useState({x: 0, y:0});
    const [initialPosition, setInitialPosition] = useState({x:0,y:0});
    const bind = useDrag( ({ offset:[x,y], last}) => {       

       setPosition({x: initialPosition.x + x, y: initialPosition.y+ y});
        
        if(last){
            setPosition({x:0,y:0});
        }
        });

    const handleDragStart = () =>{
       const {x,y} = initialPosition;
       
       setInitialPosition({x:0,y:0});
    }
    return(

    <div className="bg-gray-500 shadow-lg rounded-lg mb-2" style={{width: tileSize.width,height: tileSize.width}} >
            <div {...bind()} onMouseDown={handleDragStart} style={{transform:`translate(${position.x}px,${position.y}px)`}} className={`${colour} w-full h-full rounded-full cursor-grab`}>
            </div>
        
    </div>);
}

export default Dropper;