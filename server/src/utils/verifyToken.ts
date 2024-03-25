import jwt from "jsonwebtoken";

export default function verifyToken(token: string, email: string) {
  const value = jwt.decode(token);
  if (value && typeof value !== "string") {
    return value.email == email;
  }
  return false;
}
