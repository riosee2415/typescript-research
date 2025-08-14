let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "I'm", "upustream"];

let boolArr: Array<boolean> = [true, true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우 = union type
let multiArr: (string | number)[] = [1, "Hello"];

// 다차원 배열 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플 (javascript엔 없음)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["a", "b"];

let tup2: [number, string, boolean] = [1, "a", true];

const user: [number, string][] = [
  [1, "라이언"],
  [2, "무지"],
  [3, "춘식이"],
  [4, "어피치"],
];
