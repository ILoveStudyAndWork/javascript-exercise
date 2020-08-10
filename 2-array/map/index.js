export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const collectionB = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' };
  // eslint-disable-next-line no-param-reassign
  return collection.map(i => collectionB[i]);
}
