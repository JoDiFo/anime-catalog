export default function createExpireTime(multiplier: 1 | -1) {
  const time = new Date().getTime();
  const expireTime = time + multiplier * (1000 * 3600 * 3);

  return new Date(expireTime).toUTCString();
}
