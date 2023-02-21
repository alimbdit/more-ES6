const products = [
    {id: 1, name:'laptop', price: 45000},
    {id: 2, name:'mobile', price: 85000},
    {id: 1, name:'watch', price: 5000},
    {id: 1, name:'mouse', price: 450},
];


const arr = [10, 20, 40, 25, 61, 95, 15, 1];

const fives = arr.find(num => num % 5 === 0);
console.log(fives);

const cheap = products.find(p => p.price < 30000);
console.log(cheap);
