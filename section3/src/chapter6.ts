/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// let person: Person = {};

// Person Type으로 간주하도록 선언  assertion
let person = {} as Person;

person.name = "라이언";
person.age = 30;

// pratice

type Dog = {
  name: string;
  color: string;
};

let dog1: Dog = {
  name: "돌돌이",
  color: "white",
  // breed: "진도",   <- 에러
};

let dog2 = {
  name: "돌돌이",
  color: "white",
  breed: "진도",
} as Dog;

/**
 * 타입 assertion의 규칙
 *  값 as 단언 <- 단언식
 *  A as B
 *  A가 B의 슈퍼타입 이거나, 서브타입 이어야 한다.
 */

/**
 *  const 단언
 *  상수화 시키는 단언
 *  객체 타입과 사용할 때 활용
 */

let num4 = 10 as const;

// readonly로 추론 되어 버림  -> properties 수정 불가
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// Non null 단언
// 게시판 제작 시 사용

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "라이언",
};

// const len1: number = post.author?.length; // 옵셔널 체이닝으로 에러 발생
const len2: number = post.author!.length; // Non null 단언
