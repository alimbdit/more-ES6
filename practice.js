const oddNumbers = [1, 3, 5, 7, 9];

const evenNumbers = oddNumbers.map((number) => number + 1);

// console.log(evenNumbers);

const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisible = numbers.filter((num) => num % 10 == 0);
const divisibleFind = numbers.find((num) => num % 10 == 0);
// console.log(divisible);
// console.log(divisibleFind);

const arr = [1, 9, 17, 22];

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const result = arraySum(arr);
// console.log(result);

const total = arr.reduce((previous, current) => previous + current, 0);
// console.log(total);


const people = [
    {name: 'Meena', age: 20},
    {name: 'Rena', age: 15},
    {name: 'Suchorita', age: 22},
]

const ageSum = people.reduce((previous, current) => previous + current.age, 0);

// console.log(ageSum);

let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
};

// console.log(data.location[0]?.city);

const user = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        site: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        }
    },
    phone: "1-770-736-8031 x56442",
    website: 'hildegard.org',
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);