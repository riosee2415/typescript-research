// object
let user: object = {
  id: 1,
  name: "윤우푸",
};

// user.id;   <- object type으로 선언하면 properties를 찾을 수 없음.

// 객체 리터럴 생성
let userType: {
  id?: number; // 옵셔널
  name: string;
} = {
  id: 1,
  name: "윤우푸",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// 구조적 타입 시스템  Property based type system

userType = {
  name: "어피치",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "my-API-key",
};

// config.apiKey = "READ ONLY";
