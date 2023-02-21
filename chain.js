const users = [{id:1, name:'abul', job:'doctor'}];

// console.log(users[0].name);



const data = {
    count: 500,
    data: [
        {id:1, name:'abul', job: 'leader'},
        {id:2, name:'babul', job: 'doctor'},
    ]
}

const firstJob = data.data[1].job;

// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas Alba Adison',
    address: {
        street: {
            first: '12/A kochu lane',
            second: 'first floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka',
    },
};

const floor = user.address?.street?.second;
console.log(floor);

