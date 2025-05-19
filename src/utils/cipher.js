import CryptoJS from "crypto-js";

const caesarDecrypt = (str, shift) => {
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      }
      return char;
    })
    .join("");
};

const vigenereDecrypt = (cipherText, key) => {
  let result = "";
  key = key.toUpperCase();
  let j = 0;
  for (let i = 0; i < cipherText.length; i++) {
    const c = cipherText[i];
    if (/[a-zA-Z]/.test(c)) {
      const keyChar = key[j % key.length];
      const shift = keyChar.charCodeAt(0) - 65;
      const base = c === c.toUpperCase() ? 65 : 97;
      const newChar = String.fromCharCode(
        ((c.charCodeAt(0) - base - shift + 26) % 26) + base
      );
      result += newChar;
      j++;
    } else {
      result += c;
    }
  }
  return result;
};

const rsaDecrypt = (cipherText, key) => {
  const c = BigInt(cipherText);
  const { d, n } = key;
  return (c ** BigInt(d)) % BigInt(n) + "";
};

const aesDecrypt = (cipherText, key) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return "";
  }
};

export const solveCipher = (level, input) => {
  let decrypted = "";
  switch (level.algorithm) {
    case "Caesar Cipher":
      decrypted = caesarDecrypt(level.question, level.key);
      break;
    case "Vigenère Cipher":
      decrypted = vigenereDecrypt(level.question, level.key);
      break;
    case "RSA":
      decrypted = rsaDecrypt(level.question, level.key);
      break;
    case "AES":
      decrypted = aesDecrypt(level.question, level.key);
      break;
    default:
      break;
  }
  return decrypted.toLowerCase() === input.toLowerCase();
};
