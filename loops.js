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