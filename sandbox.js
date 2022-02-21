var allInputs = document.querySelectorAll('input');
console.log(allInputs);
allInputs.forEach(function (inputs) {
    console.log(inputs);
});
var circ = function (diameter) {
    return Math.PI * diameter;
};
console.log(circ(10));
