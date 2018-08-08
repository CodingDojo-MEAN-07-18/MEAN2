let myString = 'some string content';

// myString = 5345;

const num: number = 234234;

const array: Array<boolNumStr> = [999, 'cat', 'dog', 'horse'];


array.push('string');
array.push(3234);

array.push(true);

type boolNumStr = boolean | number | string;

const first = array[0];


function isString(value: any): value is string {
  return typeof value === 'string';
}


if (isString(first)) {
  first.toUpperCase();
}

interface Target {
  items: string[];
}

const backpack: Target = {
  items: []
};

backpack.items.push('compass');

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

interface IUser {
  name: string;
  age: number;
}

class User implements IUser {
  private bankAccount = 345394857398475;

  constructor(public name: string, public age: number) {
  }

  sayHello(name: string) {
    // this.bankAccount
    console.log(`${this.name} says hello to ${name}`);
  }
}


const user = new User('Bob', 234);

// user.bankAccount


// protected sayHello will be available inside class Person, not to the instance
// private sayHello will only be available inside User class, not on Person or any instance
// public sayHello will be available everywhere ß
class Person extends User {

  constructor(name: string, age: number, public email: string) {
    super(name, age);

      // this.bankAccount

    this.sayHello('Bob');
  }

  personMethod() {
    this.sayHello('Bob again');
  }
}

const person = new Person('Sally', 456, 'sally@sally.com');
person.sayHello('Bob');
