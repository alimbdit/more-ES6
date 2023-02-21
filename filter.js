const arr = [10, 20, 40, 25, 61, 95, 15, 1];



const bigNums = arr.filter(num => num > 20);
const tiny = arr.filter(num => num < 20);

const even = arr.filter(num => num % 2 == 0 );



// console.log(tiny);
// console.log(bigNums);

// console.log(even);

const products = [
    {id: 1, name:'laptop', price: 45000},
    {id: 2, name:'mobile', price: 85000},
    {id: 1, name:'watch', price: 5000},
    {id: 1, name:'mouse', price: 450},
];

const bigPrices = products.filter(p => p.price > 30000);

console.log(bigPrices);


