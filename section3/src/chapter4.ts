/**
 * 대수타입
 *  -> 합집합 타입
 *  -> 교집합 타임
 */

/**
 * 합집합 (Union Type)
 */
let a: string | number;
a = 1;
a = "Hello";

let b: string | number | boolean;
b = true;
b = 2;
b = "Hello";

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  language: "",
  color: "",
};

// Error
// let union4: Union1 = {
//   name: "",
// };

/**
 * 교집합 타입 - Intersection Type
 */

let vari: number & string; // never

type Intersection = Dog & Person;

// Intersection 이기 때문에 Dog와 Person이 가지고있는 모든 Props를 가져야 한다.
let inter: Intersection = {
  name: "",
  color: "",
  language: "",
};
