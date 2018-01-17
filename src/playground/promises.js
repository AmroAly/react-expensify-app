
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolve');
    }, 3000);
});

promise.then((data) => {
    console.log(data);
});

console.log('after');