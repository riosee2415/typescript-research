/**
 * 타입추론
 */

let a: number = 10;
let b = 20;
let c = "Hello";

let cc = {
  id: 1,
  profile: {
    nickname: "upu",
  },
  urls: ["https://localhost"],
};

let { id, profile, urls } = cc;

function func(param = "message") {
  return "Hello";
}

const num = 10;
