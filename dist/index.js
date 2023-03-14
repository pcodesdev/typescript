"use strict";
var _a;
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
const kgToLbs = (weight) => {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
kgToLbs(20);
kgToLbs("40");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function personName(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log("Sasa");
}
personName(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let phone = document.getElementById("phone");
phone.value;
function render(doc) {
    if (typeof doc === "string")
        console.log(doc);
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log("I love coding in typeScript");
