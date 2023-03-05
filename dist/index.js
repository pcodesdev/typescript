"use strict";
let age = 20;
if (age < 10)
    age += 10;
let sales = 1200100;
let score;
let peopleAge = [56, 78, 23];
let ageName = [1, "Joseph"];
let textColor = 2;
console.log(textColor);
const calculateTax = (income, taxYear = 2022) => {
    if (taxYear === 2022 && income >= 24000)
        return income * 0.16;
    return income;
};
console.log(calculateTax(100000, 2023));
const employee = {
    id: 1,
    age: 27,
    name: "Peter",
    retires: (date) => {
        console.log(date);
    },
};
employee.retires(2016);
