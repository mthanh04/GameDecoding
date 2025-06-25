import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartGame = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      localStorage.setItem('playerName', name);
      navigate('/game');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Chào mừng, {localStorage.getItem('currentUser')}!</h2>
      <p className="mb-2">Hãy nhập tên nhân vật của bạn để bắt đầu cuộc phiêu lưu:</p>
      <input
        type="text"
        placeholder="Tên nhân vật"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border mb-3"
      />
      <button onClick={handleStart} className="bg-purple-600 text-white px-4 py-2 rounded">
        Bắt đầu chơi
      </button>
    </div>
  );
};

export default StartGame;
