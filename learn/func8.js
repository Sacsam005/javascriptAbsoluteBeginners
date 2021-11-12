//higher order function
const add = (a,b) => {
    return a + b;
}
// console.log(add(3,4));

const sub = (a,b) => {
    return a - b;
}
// console.log(sub(3,4));

const multiply = (a,b) => {
    return a * b;
}
// console.log(multiply(3,4));

const divide = (a,b) => {
    return a/b;
}
// console.log(divide(3,4));

const calculator = (a,b, opr) => {
    return opr(a,b);
}


console.log(calculator(3,4, add));