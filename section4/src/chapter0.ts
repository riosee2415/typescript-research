/**
 * 함수 타입 정의
 */

function func(a: number, b: number): number {
  return a + b;
}

/**
 * Arrow Function
 */

const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * 함수의 매개변수
 */

// 선택적 매개변수는, 필수적 매개변수보다 뒤에 배치되어야 한다.
function introduce(name = "윤우푸", age: number, tall?: number) {
  console.log(`name : ${name}`);
  console.log(`age : ${age}`);
  console.log(`tall : ${tall}`);
  //   console.log(`tall : ${tall + 10}`); 선택적 매개변수는 undefind 일 수 있어서 에러 발생
}

function getSum(...rest: number[]): number {
  let sum = 0;

  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
