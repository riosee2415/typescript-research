/**
 * 접근제어자
 * access modifier
 *
 * public
 * private
 * protected
 */
class Employee {
  //Fields
  private name: string;
  protected age: number;
  private position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("Be Working");
  }
}

const empA = new Employee("라이언", 30, "DEVELOPER");

// empA.name; Error
