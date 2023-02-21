const numbers = [2, 3, 4, 8, 6];

function makeDouble(numbers){
    const output = [];
    for(const number of numbers){
        // const double = makeItDouble(number);
        // output.push(double);

        // output.push(makeItDouble(number));


        
        output.push(makeItDouble(number));
        // const double = makeItDouble(number);
        // output.push(double);


        // output.push(number*2);
    }
    return output;
}




// console.log(double);


// function makeItDoubleOld(num){
//     return num * 2;
// }

const makeItDouble = num => num * 2;

const double = makeDouble(numbers);

console.log(double);


function doubleMap(numbers){
    // const output = numbers.map(makeItDouble);
    // return output;
    return numbers.map(makeItDouble);
}
 
const resultMap = numbers.map(x => x * 2);
const result = doubleMap(numbers);
console.log(result);
console.log(resultMap);

const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);