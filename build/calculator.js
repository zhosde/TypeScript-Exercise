"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator = (a, b, op) => {
    switch (op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0)
                throw new Error('Can\'t divide by 0!');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('Operation is not multiply, add or divide!');
    }
};
// error-handling in case type error in runtime (e.g. from external interface)
try {
    console.log(calculator(1, 5, 'divide'));
}
catch (err) {
    console.log('Something went wrong, error message: ', err);
}
// process.argv=['node', 'yourscript.js', ...], node myprogram.js firstarg secondarg
console.log(process.argv);
exports.default = calculator;
