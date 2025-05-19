// App.jsx
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import CipherQuestion from "./components/CipherQuestion";
import levels from "./data/levels";

export default function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isJumping, setIsJumping] = useState(false);

  const progress = Math.round((currentLevelIndex / levels.length) * 100);

  const handleAnswer = (isCorrect, difficulty = 1) => {
    if (isCorrect) {
      setScore(prev => prev + difficulty * 10);
      setFeedbackMessage("✅ Thông điệp đã được giải mã thành công!");
      setIsJumping(true);

      setTimeout(() => {
        setIsJumping(false);
        if (currentLevelIndex + 1 === levels.length) {
          setCompleted(true);
        } else {
          setCurrentLevelIndex(prev => prev + 1);
        }
        setFeedbackMessage("");
      }, 1000);
    } else {
      setFeedbackMessage("❌ Thông điệp giải mã sai, hãy thử lại!");
    }
  };

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          🎉 Chúc mừng! Bạn đã tìm ra kho báu!
        </h1>
        <p className="text-lg text-gray-700 mb-4">Tổng điểm: {score}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            setCurrentLevelIndex(0);
            setCompleted(false);
            setScore(0);
            setFeedbackMessage("");
          }}
        >
          Chơi lại
        </button>
      </div>
    );
  }

  const currentLevel = levels[currentLevelIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-6 text-yellow-800 drop-shadow-md">
        Giải mã kho báu
      </h1>

      {/* Thanh tiến trình */}
      <div className="w-full max-w-xl mb-4">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Bảng game hiển thị nhân vật */}
      <GameBoard currentIndex={currentLevelIndex} isJumping={isJumping} />

      {/* Thông tin điểm & thuật toán */}
      <div className="flex justify-between items-center w-full max-w-xl mt-4">
        <p className="text-sm text-gray-700 font-semibold">Điểm: {score}</p>
        <p className="text-sm text-gray-700 font-semibold">Thuật toán: {currentLevel.algorithm}</p>
      </div>

      {/* Hiển thị câu hỏi */}
      <div className="mt-6 w-full max-w-xl">
        <CipherQuestion
          level={currentLevel}
          onAnswer={handleAnswer}
        />

        {/* Hiển thị thông điệp phản hồi */}
        {feedbackMessage && (
          <div className={`mt-4 text-center font-semibold ${feedbackMessage.startsWith("✅") ? "text-green-700" : "text-red-600"}`}>
            {feedbackMessage}
          </div>
        )}
      </div>
    </div>
  );
}