"use strict";
class Account {
  constructor(id, owner, _balance, username) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
    this.username = username;
  }
  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  get balance() {
    return this._balance;
  }
  set balance(val) {
    if (val < 0) throw new Error("Invalid value");
    this._balance = val;
  }
}
const account = new Account(1, "Peter", 70);
account.deposit(100);
account.balance = 100;
console.log(account.balance);
class SeatArrangement {}
let seats = new SeatArrangement();
seats.a1 = "Peter";
class Ride {
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
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get FullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Walking");
  }
}
class Student extends Person {
  constructor(studentId, firstName, lastName) {
    super(firstName, lastName);
    this.studentId = studentId;
  }
  takeTest() {
    console.log("taking a test");
  }
}
let student = new Student(1, "John", "mwangi");
class Teacher extends Person {
  constructor(teacherId, firstName, lastName) {
    super(firstName, lastName);
    this.teacherId = teacherId;
  }
  get FullName() {
    return `Prof. ${this.firstName} ${this.lastName}`;
  }
}
let teacher = new Teacher(1, "Peter", "Njuguna");
console.log(teacher.FullName);
function printNames(people) {
  for (let person of people) console.log(person.FullName);
}
printNames([new Student(1, "Ken", "Coder"), new Teacher(1, "Ken", "Mogaka")]);
class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  render() {
    console.log(`Rendering a circle of ${this.radius}`);
  }
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string){};
  addEvent(): void {
    throw new Error("Method not implemented");
  }
  removeEvent(): void {
    throw new Error("Method not implemented");
  }
}
