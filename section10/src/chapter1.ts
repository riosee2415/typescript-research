/**
 * Partial<T>
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial이 붙으면, Post의 모든 프로퍼티를 선택적 프로퍼티로 바꾸어줌
type Partial<T> = {
  [key in keyof T]: T[key];
};

// Required Type - 필수적!
const withThumbPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};
