const numbers = [1, 2, 3, 4, 5];

// .reduce() take two parameters first is callback function(accumulator function) and second is initial value;
// accumulator function take two parameters first is previous calculated value and second is current value from array

// const total = numbers.reduce((previous, current) => previous + current, 0);
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);

console.log(total);