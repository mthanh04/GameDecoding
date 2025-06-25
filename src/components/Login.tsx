import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUsers = () => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  };

  const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleRegister = () => {
    const users = getUsers();
    const exists = users.some((u) => u.username === username);
    if (exists) {
      alert("Tên người dùng đã tồn tại.");
      return;
    }
    saveUser({ username, password });
    alert("Đăng ký thành công! Bạn có thể đăng nhập.");
    setIsRegistering(false);
  };

  const handleLogin = () => {
    const users = getUsers();
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      localStorage.setItem("currentUser", JSON.stringify(found));
      onLogin();
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegistering ? "📝 Đăng ký" : "🔐 Đăng nhập"}
        </h2>

        <input
          type="text"
          placeholder="Tên người dùng"
          className="border p-2 w-full mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isRegistering ? (
          <button
            className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600"
            onClick={handleRegister}
          >
            Đăng ký
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
        )}

        <p
          className="mt-4 text-center text-sm text-blue-600 cursor-pointer hover:underline"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? "Bạn đã có tài khoản? Đăng nhập"
            : "Chưa có tài khoản? Đăng ký ngay"}
        </p>
      </div>
    </div>
  );
}
