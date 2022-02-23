import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
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
    list.render(doc, type.value, "end");
});
const addUUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUUID({ name: "yoshi", age: 46 });
console.log(docOne.name);
const docThree = {
    uid: 2,
    resourceName: 'hello',
    data: 'string'
};
