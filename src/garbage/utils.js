console.log('utils.js is running');

const square = (x) => {
    return x * x;
};

const add = (a, b) => a + b;

const substract = (a, b) => a - b;


export {square, add, substract as default};