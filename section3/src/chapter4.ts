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
