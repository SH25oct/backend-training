//arrow functions

//syntax

const arrowFunc = () => {
    console.log('this is a arrow function')
}
arrowFunc();

//passing arguments to arrow functions

const add = (a, b) => {
    return a + b;
}
console.log('the sum of a + b is = ', add(4,5));

//one line arrow function

const  oneLine = (a, b) => a+b;
console.log('the sum of a + b is = ', add(9,10));