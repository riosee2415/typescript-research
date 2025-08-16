/**
 *  조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwtich<T> = T extends number ? string : number;

let a: StringNumberSwtich<number>; //string
let b: StringNumberSwtich<string>; //number

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  return text.replaceAll(" ", "") as any;
}

let result = removeSpaces("Hi I'm shYOON");
result.toLocaleUpperCase();

let result2 = removeSpaces(undefined);
