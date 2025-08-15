/**
 * 타입스크립트의 Class
 */

const emp = {
  name: "윤우푸",
  age: 30,
  position: "developer",
  work() {
    console.log("be Working");
  },
};

class Employee {
  //Fields
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("Be Working");
  }
}

const empA = new Employee("YSH", 30, "developer");
console.log(empA);

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
