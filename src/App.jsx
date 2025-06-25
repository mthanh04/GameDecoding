import React, { useState } from "react";
import Login from "./components/Login";
import Lobby from "./components/Lobby";
import Game from "./components/Game";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("currentUser")
  );
  const [playerName, setPlayerName] = useState(""); // tên hiển thị người chơi
  const [gameStarted, setGameStarted] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  if (!gameStarted) {
    return (
      <Lobby
        onStart={(name) => {
          setPlayerName(name);
          setGameStarted(true);
        }}
      />
    );
  }

  return <Game playerName={playerName} />;
}
