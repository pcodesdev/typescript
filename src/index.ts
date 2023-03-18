// let age: number = 20;
// if (age < 10) age += 10;

// // Built-in type
// let sales: number = 1_200_100;
// // Any type
// let score: any;

// // Array
// let peopleAge: number[] = [56, 78, 23];

// // Tuples
// let ageName: [number, string] = [1, "Joseph"];

// // Enum
// const enum color {
//   red,
//   green,
//   blue,
// }
// let textColor: color = color.blue;
// console.log(textColor);

// // Function

// const calculateTax = (income: number, taxYear: number = 2022): number => {
//   if (taxYear === 2022 && income >= 24000) return income * 0.16;
//   return income;
// };
// console.log(calculateTax(100000, 2023));

// // Type Aliase
// type Employee = {
//   readonly id: number;
//   age: number;
//   name: string;
//   retires: (date: number) => void;
// };

// // Objects
// const employee: Employee = {
//   id: 1,
//   age: 27,
//   name: "Peter",
//   retires: (date) => {
//     console.log(date);
//   },
// };
// employee.retires(2016);

// // Union Types
// const kgToLbs = (weight: number | string): number => {
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// };

// kgToLbs(20);
// kgToLbs("40");

// // Intersection Type
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// // Literal (exact,specific)
// type Quantity = 20 | 50;
// let quantity: Quantity = 50;

// // Nullable Types
// function personName(name: string | null) {
//   if (name) console.log(name.toLocaleUpperCase());
//   else console.log("Sasa");
// }
// personName(null);

// // Optional Chaining
// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);
// // Optional property access operator
// console.log(customer?.birthday?.getFullYear());

// // The Nullish Coaelscing operator
// let speed: number | null = null;
// let ride = {
//   // Falsy values in js (undefined,null,"",false,0)
//   speed: speed ?? 30,
// };

// // Type Assertions
// let phone = document.getElementById("phone") as HTMLInputElement;

// phone.value;

// // The Unknown Type
// // Remember using the unknown type is preferred to using any type
// function render(doc: unknown) {
//   // Narrowing
//   if (typeof doc === "string") console.log(doc);
// }

// //The Never Type
// function processEvents(): never {
//   while (true) {
//     // Infinite loop
//   }
// }
// processEvents();
// console.log("I love coding in typeScript");

// // Creating Classes
class Account {
  // Parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,

    public username?: string
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  // getter
  get balance(): number {
    return this._balance;
  }
  // setter
  set balance(val: number) {
    if (val < 0) throw new Error("Invalid value");
    this._balance = val;
  }
  // private calcTax(): void {}
}
// Creating Objects
const account = new Account(1, "Peter", 70);
account.deposit(100);
account.balance = 100;
console.log(account.balance);

class SeatArrangement {
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatArrangement();
seats.a1 = "Peter";

// Static members
class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

// Inheritance
// Parent
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get FullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Walking");
  }
}

// child
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("taking a test");
  }
}

let student = new Student(1, "John", "mwangi");

// Method Overriding
class Teacher extends Person {
  constructor(public teacherId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  override get FullName() {
    return `Prof. ${this.firstName} ${this.lastName}`;
  }
}

let teacher = new Teacher(1, "Peter", "Njuguna");
console.log(teacher.FullName);

// polymorphism
function printNames(people: Person[]) {
  for (let person of people) console.log(person.FullName);
}
printNames([new Student(1, "Ken", "Coder"), new Teacher(1, "Ken", "Mogaka")]);

// Abstract Classes and Methods:
// abstract classes means classes that are not ready
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log(`Rendering a circle of ${this.radius}`);
  }
}

// Interfaces
// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
