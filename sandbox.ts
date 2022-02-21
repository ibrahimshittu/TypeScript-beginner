const allInputs = document.querySelectorAll('input')
console.log(allInputs)

allInputs.forEach(inputs => {
    console.log(inputs)
})

const circ = (diameter: number) => {
    return Math.PI * diameter
}

console.log(circ(10))