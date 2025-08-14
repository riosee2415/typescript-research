// any
// 특정 변수의 타입을 확실히 모를 때 사용
// 어느 타입에라도 들어갈 수 있음
let anyBar: any = 10;

anyBar = "Hello";

// unknown
// 어느 타입에도 들어갈 수 없음
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
