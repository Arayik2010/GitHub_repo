export function chunkArray(listArray, chunkSize) {
  return [...Array(Math.ceil(listArray.length / chunkSize))].map((_) => listArray.splice(0, chunkSize));
}
