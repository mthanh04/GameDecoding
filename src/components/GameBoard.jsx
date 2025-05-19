import React from "react";
import Player from "./Player";
import levels from "../data/levels";

// Import icons từ lucide-react
import { Landmark, ScrollText, Shield, Lock } from "lucide-react";

// Import hình ảnh kho báu
import treasureImg from "../assets/pngtree-golden-treasure-box-png-image_6223852.png"; // Đảm bảo đường dẫn đúng

const GameBoard = ({ currentIndex }) => {
  const size = 4;

  const getIconForAlgorithm = (algorithm) => {
   switch (algorithm) {
  case "Caesar Cipher":
    return <Landmark className="text-red-600 w-6 h-6" />;
  case "Vigenère Cipher":
    return <ScrollText className="text-blue-600 w-6 h-6" />;
  case "RSA":
    return <Shield className="text-green-600 w-6 h-6" />;
  case "AES":
    return <Lock className="text-purple-600 w-6 h-6" />;
}

  };

  return (
    <div
      className="grid grid-cols-4 gap-1 border-4 border-yellow-700 rounded-xl p-2 bg-yellow-100 shadow-lg"
      style={{ width: "320px", height: "320px" }}
    >
      {Array.from({ length: size * size }).map((_, idx) => (
        <div
          key={idx}
          title={levels[idx]?.algorithm}
          className={`relative border-2 border-yellow-500 rounded-md bg-yellow-50 flex items-center justify-center transition-all duration-300 ease-in-out
            ${idx === currentIndex ? "bg-yellow-300 scale-105 shadow-md" : ""}
          `}
        >
          {idx === currentIndex && (
            <div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out"
            >
            <Player />
            </div>
          )}

          {idx === size * size - 1 ? (
            <img
              src={treasureImg}
              alt="Treasure"
              className="w-12 h-12 animate-bounce drop-shadow-md"
            />
          ) : (
            levels[idx] && getIconForAlgorithm(levels[idx].algorithm)
          )}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
