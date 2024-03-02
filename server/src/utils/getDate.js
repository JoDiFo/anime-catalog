export default function getDate() {
  const args = new Date().toDateString().split(" ").slice(1, 5);
  let res = `${args[0]}, ${args[1]} ${args[2]}`;
  return res;
}
