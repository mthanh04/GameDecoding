const levels = [
  // Caesar Cipher (4 câu hỏi)
  {
    algorithm: "Caesar Cipher",
    difficulty: 1,
    points: 10,
    question: "Khoor",
    answer: "Hello",
    key: 3,
  },
  {
    algorithm: "Caesar Cipher",
    difficulty: 2,
    points: 20,
    question: "Zruog",
    answer: "World",
    key: 3,
  },
  {
    algorithm: "Caesar Cipher",
    difficulty: 3,
    points: 30,
    question: "Fdhvdu",
    answer: "Caesar",
    key: 3,
  },
  {
    algorithm: "Caesar Cipher",
    difficulty: 4,
    points: 40,
    question: "Fdooxp",
    answer: "Callum",
    key: 3,
  },

  // Vigenère Cipher (4 câu hỏi)
  {
    algorithm: "Vigenère Cipher",
    difficulty: 1,
    points: 10,
    question: "Rijvs",
    answer: "Hello",
    key: "KEY",
  },
  {
    algorithm: "Vigenère Cipher",
    difficulty: 2,
    points: 20,
    question: "LXFOPVEFRNHR",
    answer: "ATTACKATDAWN",
    key: "LEMON",
  },
  {
    algorithm: "Vigenère Cipher",
    difficulty: 3,
    points: 30,
    question: "ZICVTWQNGRZGVTWAVZHCQYGLMGJ",
    answer: "WEAREDISCOVEREDSAVEYOURSELF",
    key: "DECEPTIVE",
  },
  {
    algorithm: "Vigenère Cipher",
    difficulty: 4,
    points: 40,
    question: "TIGPE",
    answer: "CODES",
    key: "HIDE",
  },

  // RSA (4 câu hỏi)
  {
    algorithm: "RSA",
    difficulty: 1,
    points: 10,
    question: "529",
    answer: "281",
    key: { n: 899, d: 611 },
  },
  {
    algorithm: "RSA",
    difficulty: 2,
    points: 20,
    question: "104",
    answer: "737",
    key: { n: 899, d: 611 },
  },
  {
    algorithm: "RSA",
    difficulty: 3,
    points: 30,
    question: "67",
    answer: "180",
    key: { n: 899, d: 611 },
  },
  {
    algorithm: "RSA",
    difficulty: 4,
    points: 40,
    question: "441",
    answer: "123",
    key: { n: 899, d: 611 },
  },

  // AES (3 câu hỏi)
  {
    algorithm: "AES",
    difficulty: 1,
    points: 10,
    question: "U2luaCB2aWVjIG1haA==", // "Sinh viec mah"
    answer: "Sinh viec mah",
    key: "univ2025",
  },
  {
    algorithm: "AES",
    difficulty: 2,
    points: 20,
    question: "Y29uZ25naGllIHRyYW5n", // "congnghie trang"
    answer: "congnghie trang",
    key: "techkey123",
  },
  {
    algorithm: "AES",
    difficulty: 3,
    points: 30,
    question: "dGhpZW4gbHkgb2kgbmhhYQ==", // "thien ly oi nhaa"
    answer: "thien ly oi nhaa",
    key: "poetry888",
  },
];

export default levels;
