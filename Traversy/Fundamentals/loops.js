const ifLoop = function () {
    // FOR LOOP
    // With the conditions. Would log special message for 5 & 7
    for (let index = 0; index < 10; index++) {
        if (index === 5)
            console.log(`5 is the number of grace`); // returns 5 is the number of grace
        else if (index === 7)
            console.log(`7 is the number of perfection`); // returns 7 is the number of grace
        else
            console.log(`Number ${index}`); // returns the rest of the numbers.
    }

}
ifLoop()
console.log('');
console.log('Break & Continue');
const contiLoop = function () {
    // With condition and continue
    for (let index = 0; index < 10; index++) {
        if (index === 5) {
            console.log(`I love the number 5`);
            continue
        }
        if (index === 7) {
            console.log(`I love perfection`);
            break;
        }
        console.log(`Number ${index}`);

    }
}
contiLoop()

/* 
Do more research on Loops. They say use a for loop when certain
of the range and a while loop when we don't know.
*/
// WHILE LOOP
let i = 0;
console.log('');
console.log('While loop');
while (i < 10) {
    console.log(`Number ${i}`);
    i++
}

// DO WHILE
console.log('');
console.log('Do while');

// let x = 10; // Would output 10
x = 0; // Would output 0 through 10
do {
    console.log(`Number ${x}`);
    x++;
}
while (x < 10);

// LOOP TRHOUGH AN ARRAY.
console.log('');
console.log('Loop with an array');
console.log('');
const cars = ['Mercedes Gullwing', 'LandRover Defender', 'Buggatti Chiron', 'G-Wagon']
for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
} // returns all the cars in our list one by one

// FOR EACH
// Cleaner way for iterating through an array.
console.log('');
console.log('//For Each');
cars.forEach(function (car, index, array) {
    // 0 based
    console.log(`${index} : ${car}`);
    console.log(array);
}) // returns the index: car and the array. 

// FOR IN

const user = {
    firstName: 'James',
    lastName: 'Bond',
    age: 28
}
console.log('');
console.log('// For in');
for (let index in user) {
    console.log(`${index} : ${user[index]}`);
}

// MAP
const users = [{
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Julia'
    },
    {
        id: 3,
        name: 'Rose'
    },
    {
        id: 4,
        name: 'Sam'
    },
];

const ids = users.map(function (users) {
    return users.id;
});

console.log('');
console.log(ids); // returns [1, 2, 3]