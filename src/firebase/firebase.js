
import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default };
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// var expenses = [{
//     description: 'some desc 1',
//     note: 'some note 1',
//     amount: 111,
//     createdAt: 100
// }, {
//     description: 'some desc 2',
//     note: 'some note 2',
//     amount: 112,
//     createdAt: 200    
// }, {
//     description: 'some desc 3',
//     note: 'some note 3',
//     amount: 113,
//     createdAt: 300
// }];

// expenses.map((expense) => {
//     return database.ref('expenses').push(expense);
// });

// database.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val() 
//             });
//         });
        
//         console.log(expenses);
//     });

// database.ref('expenses').on('value',(snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val() 
//             });
//         });
        
//         console.log(expenses);
//     });




// database.ref('notes/-L2qqbnV4dIHlLH-Rc_w').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Python, PHP, NodeJs'
// });

// database.ref('location/city').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 4000);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10000);


// database.ref().on('value', (snapshot) => {
//     const { name, age, job: { company, title } } = snapshot.val();
//     console.log(`${name} is ${age} and (s)he is a ${title} at ${company}`);
// });

// database.ref().set({
//     name: 'Amr Ali',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Cairo',
//         country: 'Egypt'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'London'
// });
// // database.ref().remove();