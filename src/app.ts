import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 240)
// docTwo = new Payments("yoshi", "wen work", 240)

interface isPerson {
    name: string,
    age: number,
    speak(a: string) : void
}

const me: isPerson = {
    name: "ibrahim",
    age: 12,
    speak (text: string) : void {
        console.log(text)
    }
}

const  invOne = new Invoice("mario", 'work', 450)

let invoices : Invoice[] = [];


invoices.push(invOne)
//console.log(invoices)




const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault()

    let doc: HasFormatter;

    if (type.value === "invoice") {
       doc = new  Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
       doc = new  Payments(tofrom.value, details.value, amount.valueAsNumber)
    }

    console.log(
        doc
    )

    list.render(doc, type.value, "end")
})


const addUUID = <T extends object | {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random()*100)
    return {...obj, uid}
}

let docOne = addUUID({name: "yoshi", age: 46})

console.log(docOne.name)

enum ResourceType {
    BOOK, AUTHOR, PERSON
}

interface Resources<T> {
    uid: number,
    resourceName: string, 
    resourceType: ResourceType,
    data: T;
}




const docThree: Resources<string> = {
    uid: 2,
    resourceName: 'hello',
    resourceType: ResourceType.BOOK,
    data: 'string'
}