// function swap<T>(a: T, b: T) {
//   return [b, a];
// }

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

//////////////////////////////////////////////

function returnFristValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

const returnData1 = returnFristValue([1, 2, 3]);
const returnData2 = returnFristValue([1, "Hello", "My", "TypeScript"]);

////////////////////////////////////////////////

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let va1 = getLength([1, 2, 3]); // 3
let va2 = getLength("aaaaa"); // 5
let va3 = getLength({ length: 10 }); // 10
