const allInputs = document.querySelectorAll('input')
console.log(allInputs)

allInputs.forEach(inputs => {
    console.log(inputs)
})

const circ = (diameter: number) => {
    return Math.PI * diameter
}

console.log(circ(10))

let character : string ;
let ninjas : string[] = [];

ninjas = ['shaun', 'ryu', 'chun-li']

let mixed: (string | number | boolean)[] = [];

let uniion : string | number | boolean;

let ninjaone: object;
ninjaone = { name: 'shaun', age: 30 }

let noinjaTwo : {
    name: string,
    age: number
}

let fool: any;
let hello : any[] = [10, 'shaun', false]

