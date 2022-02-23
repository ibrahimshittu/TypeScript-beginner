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

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`
    }
}

const  invOne = new Invoice("mario", 'work', 450)

let invoices : Invoice[] = [];
invOne.client = 'hello'

invoices.push(invOne)
console.log(invoices)




const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault()

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )
})



