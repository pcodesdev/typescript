let age: number = 20;
if (age < 10) age += 10;

// Built-in type
let sales: number = 1_200_100;
// Any type
let score: any;

// Array
let peopleAge: number[] = [56, 78, 23];

// Tuples
let ageName: [number, string] = [1, "Joseph"];

// Enum
const enum color {
  red,
  green,
  blue,
}
let textColor: color = color.blue;
console.log(textColor);

// Function

const calculateTax = (income: number, taxYear: number = 2022): number => {
  if (taxYear === 2022 && income >= 24000) return income * 0.16;
  return income;
};
console.log(calculateTax(100000, 2023));

// Type Aliase
type Employee = {
  readonly id: number;
  age: number;
  name: string;
  retires: (date: number) => void;
};

// Objects
const employee: Employee = {
  id: 1,
  age: 27,
  name: "Peter",
  retires: (date) => {
    console.log(date);
  },
};
employee.retires(2016);

// Union Types
const kgToLbs = (weight: number | string): number => {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
};

kgToLbs(20);
kgToLbs("40");

// Intersection Type
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal (exact,specific)
type Quantity = 20 | 50;
let quantity: Quantity = 50;

// Nullable Types
function personName(name: string | null) {
  if (name) console.log(name.toLocaleUpperCase());
  else console.log("Sasa");
}
personName(null);

// Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// The Nullish Coaelscing operator
let speed: number | null = null;
let ride = {
  // Falsy values in js (undefined,null,"",false,0)
  speed: speed ?? 30,
};

// Type Assertions
let phone = document.getElementById("phone") as HTMLInputElement;

phone.value;

// The Unknown Type
// Remember using the unknown type is preferred to using any type
function render(doc: unknown) {
  // Narrowing
  if (typeof doc === "string") console.log(doc);
}

//The Never Type
function processEvents(): never {
  while (true) {
    // Infinite loop
  }
}
processEvents();
console.log("I love coding in typeScript");
