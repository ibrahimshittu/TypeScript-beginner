import { Invoice } from "./classes/invoice.js";
import { Payments } from "./classes/payments.js";
const me = {
    name: "ibrahim",
    age: 12,
    speak(text) {
        console.log(text);
    }
};
const invOne = new Invoice("mario", 'work', 450);
let invoices = [];
invoices.push(invOne);
//console.log(invoices)
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
