import React, { useState } from "react";

export default function CipherQuestion({ level, onAnswer }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedUser = userAnswer.trim().toUpperCase();
    const normalizedCorrect = level.answer.trim().toUpperCase();
    onAnswer(normalizedUser === normalizedCorrect, level.points);
    setUserAnswer("");
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        🔐 {level.algorithm} - Độ khó: {level.difficulty}
      </h2>

      <p className="mb-2">
        <div className="font-semibold">Câu hỏi: {level.question} {/* Hiển thị khóa nếu tồn tại */}
      {level.key && (
        <p className=" text-sm text-gray-700">
          <span className="font-semibold">Khóa:</span>{" "}
          {typeof level.key === "object"
            ? Object.entries(level.key)
                .map(([k, v]) => `${k} = ${v}`)
                .join(", ")
            : level.key}
        </p>
      )}</div> 
        <div></div>
        
      </p>

      

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Nhập câu trả lời"
          className="flex-1 px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Kiểm tra
        </button>
      </form>
    </div>
  );
}
