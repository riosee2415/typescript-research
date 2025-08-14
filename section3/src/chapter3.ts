let num1: number = 10;
let num2: 20 = 20;

num1 = num2; // num1이 num2를 기준으로 super 이기 때문에 가능

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;  에러발생
