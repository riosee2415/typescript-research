/**
 * 맵드타입 - 객체 타입을 조작
 */

// 유저 정보를 관리

interface User {
  id: number;
  name: string;
  age: number;
}

// 실무에서 자주 사용 됨
type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "윤우푸",
    age: 30,
  };
}

function updateUser(user: PartialUser): void {
  // ... 수정하는 기능
}

updateUser({
  //   id: 1,
  //   name: "윤우푸",
  age: 25,
});
