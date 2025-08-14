// enum 타입 = 열거형 타입 // 여러가지 타입에 각각 이름을 부여해 열거해두고 사용
// javascript에는 없음

enum Role {
  // 0, 1, 2 순으로 숫자 자동 매핑
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "윤우푸",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: "라이언",
  role: Role.USER, // 1 <- 일반유저
  language: Language.english,
};
const user3 = {
  name: "어피치",
  role: Role.GUEST, // 2<- 게스트
  language: Language.english,
};

console.log(user1);
console.log(user2);
console.log(user3);
