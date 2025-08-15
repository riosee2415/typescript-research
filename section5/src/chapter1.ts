interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name: "Hello"; // 상속을 받아와서 슈퍼가 가지고 있는 프로퍼티의 타입을 재정의 할 수 있다. 단, 슈퍼 프로퍼티가 가지고있는 타입 내 에서 케스팅 가능
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "",
  age: 1,
  isBark: true,
};
