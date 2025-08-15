/**
 * 함수 오버로딩
 *
 */

// 함수에 어떤 버젼들이 있는지 선언 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 함수 실제 구현 부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func();          에러
func(1);
// func(1, 2);      에러
func(1, 2, 3);
