/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const p: Person = {
  name: "윤우푸",
  age: 30,
};

getPropertyKey(p, "name");
