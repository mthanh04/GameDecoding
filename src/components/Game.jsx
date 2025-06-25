import React, { useState } from "react";
import GameBoard from "./GameBoard";
import CipherQuestion from "./CipherQuestion";
import levels from "../data/levels";
import BokehBackground from "./BokehBackground"; // 👈 Thêm dòng này

export default function Game() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isJumping, setIsJumping] = useState(false);

  const progress = Math.round((currentLevelIndex / levels.length) * 100);

  const handleAnswer = (isCorrect, difficulty = 1) => {
    if (isCorrect) {
      setScore((prev) => prev + difficulty * 10);
      setFeedbackMessage("✅ Thông điệp đã được giải mã thành công!");
      setIsJumping(true);

      setTimeout(() => {
        setIsJumping(false);
        if (currentLevelIndex + 1 === levels.length) {
          setCompleted(true);
        } else {
          setCurrentLevelIndex((prev) => prev + 1);
        }
        setFeedbackMessage("");
      }, 1000);
    } else {
      setFeedbackMessage("❌ Thông điệp giải mã sai, hãy thử lại!");
    }
  };

  const currentLevel = levels[currentLevelIndex];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 flex flex-col items-center overflow-hidden">
      {/* Nền bokeh động */}
      <BokehBackground />

      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-800 drop-shadow-md">
          Giải mã kho báu
        </h1>

        <div className="w-full max-w-xl mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <GameBoard currentIndex={currentLevelIndex} isJumping={isJumping} />

        <div className="flex justify-between items-center w-full max-w-xl mt-4">
          <p className="text-sm text-gray-700 font-semibold">Điểm: {score}</p>
          <p className="text-sm text-gray-700 font-semibold">
            Thuật toán: {currentLevel.algorithm}
          </p>
        </div>

        <div className="mt-6 w-full max-w-xl">
          <CipherQuestion level={currentLevel} onAnswer={handleAnswer} />
          {feedbackMessage && (
            <div
              className={`mt-4 text-center font-semibold ${
                feedbackMessage.startsWith("✅")
                  ? "text-green-700"
                  : "text-red-600"
              }`}
            >
              {feedbackMessage}
            </div>
          )}
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("currentUser");
            window.location.reload();
          }}
          className="absolute top-4 right-4 text-sm text-red-600 hover:underline"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
