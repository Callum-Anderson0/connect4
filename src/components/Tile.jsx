import React from "react";
import { motion } from "framer-motion";

// Wrap Tile in forwardRef to allow parent to attach a ref
const Tile = React.forwardRef(({ x, y, onClick, state, size }, ref) => {
  return (
    <div
      ref={ref} // Forward the ref to the div
      onClick={() => {
        onClick({ x, y, state });
        console.log(size);
      }}
      className="bg-gray-500 w-full aspect-square shadow-lg rounded-lg mb-2"
    >
      {state === "A" && (
        <motion.div
          className="bg-red-700 w-full h-full rounded-full"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        ></motion.div>
      )}
      {state === "B" && (
        <motion.div
          className="bg-yellow-700 w-full h-full rounded-full"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        ></motion.div>
      )}
    </div>
  );
});

export default Tile;