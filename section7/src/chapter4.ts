/**
 *  제네릭 클레스
 */

class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);

numberList.pop();
numberList.push(4);
numberList.print();

// string도 이용하고싶을 때 ..?

class GenericList<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const genericList1 = new GenericList(["1", "2", "3"]);
const genericList2 = new GenericList([1, 2, 3]);

genericList1.pop();
genericList1.push("aa");
genericList1.print();

genericList2.pop();
genericList2.push(5);
genericList2.print();
