/**
 * 인덱스드 엑세스 타입
 *
 */

interface Post {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location: string;
  };
}

// function printAuthorInfo(author : {id : number, author : string}) {
function printAuthorInfo(author: Post[`author`]) {
  // 해당 타입을 인덱스 라고 부름  Post[`author`]
  console.log(
    `${author.name} _ ${author.id} _ ${author.age} _ ${author.location}`
  );
}

const post: Post = {
  id: 1,
  title: "첫번째 게시글",
  content: "첫번째 게시글 내용",
  author: {
    id: 4,
    name: "윤우푸",
    age: 30,
    location: "Korea",
  },
};

//////////////////////////////////

type PostList = {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location: string;
  };
}[];

const post2: PostList[number] = {
  id: 1,
  title: "첫번째 게시글",
  content: "첫번째 게시글 내용",
  author: {
    id: 4,
    name: "윤우푸",
    age: 30,
    location: "Korea",
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(
    `${author.name} _ ${author.id} _ ${author.age} _ ${author.location}`
  );
}
