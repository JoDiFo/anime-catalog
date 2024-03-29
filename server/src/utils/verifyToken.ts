import fs from "fs";
import jwt from "jsonwebtoken";

export default function verifyToken(token: string) {
  const privateKey = fs.readFileSync(
    "D:/Projects/Anime-store/server/src/key.txt"
  );

  const value = jwt.verify(token, privateKey);
  return value;
}
