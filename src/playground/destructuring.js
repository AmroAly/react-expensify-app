
// const person = {
//     name: 'Amr',
//     age: 26,
//     location: {
//         city: 'Cairo',
//         temp: 22
//     }
// };

// const { name, age, location: {city, temp} } = person;

// console.log(`${name} is ${age}`);

// console.log(`it's ${temp} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };


// const { name: publisherName='test' } = book.publisher;
// console.log(publisherName);

const address = ['32 yaqop St', 'Cairo', 'Egypt', '11782'];

const [, city, country = 'EG'] = address;
console.log(`You are in ${country}, ${city}`);

const items = ['coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [,, medium] = items;
console.log(`A medium coffe costs ${medium}`);
