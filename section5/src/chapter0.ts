/**
 * 인터페이스
 */

interface Person {
  name: string;
  readonly rdName: string;
  age?: number;
  // overload 시그니처 생성 가능 (호출 시그니처 사용)
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person1: Person = {
  name: "윤우푸",
  rdName: "윤우푸",
  age: 30,
  sayHi: () => {
    console.log("Hi");
  },
};

const person2: Person = {
  name: "라이언",
  rdName: "윤우푸",
  sayHi: () => {},
};

person1.name = "수정가능";
// person1.rdName = "수정불가"

person1.sayHi();
