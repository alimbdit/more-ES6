const arr = [4,6,8,12,45];

const result = arr.map(x => parseFloat((x/3).toFixed(2)));
// console.log(result);


const friends = ['Tom thomas', 'Tom cruise', 'Tom anderson', 'Tom bread'];

const firstLetters = friends.map(f => f[0]);
// console.log(firstLetters);

const products = [
    {id: 1, name:'laptop', price: 45000},
    {id: 2, name:'mobile', price: 85000},
    {id: 1, name:'watch', price: 5000},
    {id: 1, name:'mouse', price: 450},
];

const names = products.map(product => product.name);
const prices = products.map(p => p.price);

console.log(names);
console.log(prices);

