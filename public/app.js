"use strict";
// const anchor = document.querySelector('a')!
// console.log(anchor.href)
//public private readonly
class Invoice {
    // client: string;
    // private details: string;
    // amount: number;
    // constructor(c: string,d: string, a: number) {
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", 'work', 450);
let invoices = [];
invOne.client = 'hello';
invoices.push(invOne);
console.log(invoices);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
