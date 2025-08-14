// number
// :타입 -> 타입 어노테이션
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "ts";
let str2: string = "tsts";
let str3: string = `tststs`;
let str4: string = `Hello ${num1}`;

// boolean
let bool1: boolean = false;
let bool2: boolean = true;

// temp null  [tsconfig.json:8]
// let numA: number = null;

// 리터널 type
// 값 그 자체가 타입이 되는 경우
let numA: 10 = 10;
