/**
 * unknown Type
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "Hello";
  let c: unknown = true;
  let d: unknown = undefined;
  let e: unknown = null;

  let unknownVar: unknown;

  //   let num: number = unknownVar;      Error
  //   let str: string = unknownVar;      Error
  //   let bool: boolean = unknownVar;    Error
}

/**
 * never Type
 */
function neverExam(): void {
  function neverFunc(): never {
    while (true) {}
  }

  // down casting
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // up casting은 안됨
}

/**
 * void
 */
function voidExam() {
  // undefined의 super이기 때문에 undefined upcasting 불가
  function voidFunc(): void {
    console.log("Void Hi");
  }
}
