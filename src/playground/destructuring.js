// // Object destructing
// // console.log('dst');

// const person = {
//     name: 'Takina',
//     age: 16,
//     location: {
//         city: 'Tokyo',
//         temp: 29
//     }
// };

 
// const { name : firstName = 'someone', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temprature} = person.location;

// if (city && temprature) {
//     console.log(`It's ${temprature} C in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: undefined
//     }   
// };

// const {name: publisherName = 'defaultPublisher'} = book.publisher;

// console.log(publisherName);


// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];

const [coffeeType,,m] = item;


console.log(`A medium ${coffeeType} costs ${m}`);