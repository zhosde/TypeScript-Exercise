"use strict";
const parseArguments = (args) => {
    if (args.length < 4)
        throw new Error('Not enough arguments');
    if (args.length > 4)
        throw new Error('Too many arguments');
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        };
    }
    else {
        throw new Error('Provided values were not numbers!');
    }
};
const multiplicator = (a, b, printText) => {
    console.log(printText, a * b);
};
try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
}
catch (err) {
    console.log('Error, something bad happened, message: ', err);
}
