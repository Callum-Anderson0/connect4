import React, { useRef, useEffect, useState } from "react";
import Tile from "./Tile";
import Dropper from "./Dropper";

function Board({ gameState, handleTileClick }) {
  const tileRef = useRef(null); // Ref to observe a single tile
  const [tileSize, setTileSize] = useState({ width: 0, height: 0 });

  // Measure the size of the first tile and propagate to all
  useEffect(() => {
    if (!tileRef.current) return;

    const updateSize = (entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setTileSize({ width, height });
        console.log("Measured size (Board):", width, height);
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(tileRef.current, { box: "content-box" });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div>
    <div className="bg-gray-700 grid grid-cols-7 gap-2 w-full rounded-lg shadow-lg p-4 pt-4 pb-2">
      {gameState.map((column, colIndex) => (
        <div className="bg-gray-700 h-full" key={colIndex}>
          {column.map((value, rowIndex) => {
            // Attach ref to the first tile (col 0, row 0)
            const isFirstTile = colIndex === 0 && rowIndex === 0;
            return (
              <Tile
                ref={isFirstTile ? tileRef : null} // Ref only the first tile
                key={`${colIndex}-${rowIndex}`}
                x={colIndex}
                y={rowIndex}
                state={value}
                onClick={handleTileClick}
                size={tileSize} // Pass size to ALL tiles
              />
            );
          })}
        </div>
      ))}
    </div>
    <div className="flex justify-center bg-gray-700 rounded-lg mt-2 w-full gap-2 pt-2">
                <Dropper colour={'bg-red-700'} tileSize={tileSize}></Dropper>
                <Dropper colour={'bg-yellow-700'} tileSize={tileSize}></Dropper>
      </div>
    </div>
    
  );
}

export default Board;