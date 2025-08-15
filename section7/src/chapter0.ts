/**
 * 제네릭
 */

// 제네릭 함수

function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("Hell");

let arr1 = func([1, 2, 3]);
let arr2 = func(<[number, number, number]>[1, 2, 3]);
