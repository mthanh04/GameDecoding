import React, { useState } from "react";
import { motion } from "framer-motion";
import BokehBackground from "./BokehBackground"; // Import lớp hiệu ứng

export default function Lobby({ onStart }) {
  const [name, setName] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hiệu ứng bokeh & sao băng */}
      <BokehBackground />

      {/* Nội dung chính */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-yellow-700 drop-shadow">
            ✨ Sảnh Chơi
          </h2>
          <p className="mb-2 text-gray-600 text-sm">Nhập tên người chơi:</p>

          <input
            type="text"
            className="border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2 w-full mb-4 rounded-lg transition-all duration-300 shadow-sm"
            placeholder="Ví dụ: TMT"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 shadow-md font-semibold"
            onClick={() => {
              if (!name.trim()) {
                alert("Vui lòng nhập tên người chơi!");
                return;
              }
              onStart(name.trim());
            }}
          >
            🚀 Bắt đầu chơi
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
