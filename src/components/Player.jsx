import React from "react";
import pikachu from "../assets/sticker-png-1-pikachu-photo.png";

const Player = ({ isJumping }) => {
  return (
    <img
      src={pikachu}
      alt="player"
      className={`w-12 h-12 object-contain drop-shadow-md transition-transform duration-500 ${
        isJumping ? "animate-bounce" : ""
      }`}
    />
  );
};

export default Player;