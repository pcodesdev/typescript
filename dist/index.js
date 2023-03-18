"use strict";
class Account {
    constructor(id, owner, _balance, username) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.username = username;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(val) {
        if (val < 0)
            throw new Error("Invalid value");
        this._balance = val;
    }
}
const account = new Account(1, "Peter", 70);
account.deposit(100);
account.balance = 100;
console.log(account.balance);
