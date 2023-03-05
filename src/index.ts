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

// Objects
const employee: {
  readonly id: number;
  age: number;
  name: string;
  retires: (date: number) => void;
} = {
  id: 1,
  age: 27,
  name: "Peter",
  retires: (date) => {
    console.log(date);
  },
};
employee.retires(2016);
