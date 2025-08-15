/**
 * 타입 좁히기
 * 조건문 등을 이용하여 넓은 타입에서 좁은 타입으로 타입을
 * 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value가 number => toFixed
// value가 string => toUpperCase
// value가 Date => getTime
// value가 Person => age살 입니다 출력
function func(value: number | string | Date | null | Person) {
  // Type Guard Coding
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
  //   else if (value instanceof Person) {}  <- 에러 발생 -> Person은 type일 뿐, 객체가 아니라 instanceof 기능을 사용할 수 없습니다.
  else if (value && "age" in value) {
    console.log(`${value.age}살 입니다.`);
  }
}
