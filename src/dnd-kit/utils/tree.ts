export function addArrayItem<T>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr : [...arr, item];
}

export function removeArrayItem<T>(arr: T[], item: T): T[] {
  const index = arr.indexOf(item);
  if (index === -1) {
    return arr;
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
