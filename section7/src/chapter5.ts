/**
 * Promise
 */

//                  비동기 작업의 결과를 재네릭으로 선언할 수 있다.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // reject("~~ 때문에 실패했지!");
  }, 1000);
});

promise
  .then((response) => {
    console.log(response * 10);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

// 서버로부터 하나의 게시글 데이터를 불러오는 함수를 만든다
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
