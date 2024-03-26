import fs from "fs";
import jwt from "jsonwebtoken";

export function generateAccessToken(userId: number, email: string) {
  const privateKey = fs.readFileSync(
    "D:/Projects/Anime-store/server/src/key.txt"
  );

  const token = jwt.sign({ userId, email }, privateKey);

  return token;
}
