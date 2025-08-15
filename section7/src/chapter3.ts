/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key value",
  value: 1,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["a", "b", "c"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 10230,
  value: 102030,
};

// value의 타입을 바꿀 수 있는 유연한 타입
interface MMap<V> {
  [key: string]: V;
}

let stringMap: MMap<string> = {
  key: "value",
  //   aa: true,   ERROR
};

let booleanMap: MMap<boolean> = {
  key: true,
  key2: false,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<String> = {
  key: "Hello",
  answer: "How are U?",
};

/**
 * HOW TO USE
 * 활용예시 - 유저 관리 프로그램
 * 유저구분 : 학생 / 개발자
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "라이언",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "어피치",
  profile: {
    type: "student",
    school: "한양대학교",
  },
};

// goToSchool(developerUser); // 에러
goToSchool(studentUser);
