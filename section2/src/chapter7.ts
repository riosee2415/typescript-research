// void 타입

const action = (): string => {
  return "Hello World";
};

const action2 = (): void => {
  console.log("Hello Viod");
};

const action3 = (): never => {
  throw new Error();
};
