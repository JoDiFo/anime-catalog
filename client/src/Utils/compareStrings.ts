export default function compareStrings(item: string, search: string): boolean {
  if (search === "") {
    return true;
  }

  if (item.toLocaleLowerCase().includes(search)) {
    return true;
  }

  return false;
}
