// Months are zero based. Meaning January = 0, December = 11
let ret;
const today = new Date() // returns today's date
let birthday = new Date('11-12-1942 11:11:11')
birthday = new Date('November 11 2011 11:11:11')
birthday = new Date('11/11/1911 11:11:11')

ret = today;
ret = birthday.getMonth(); // returns 10 for November.
ret = birthday.getDate(); // returns 11.
ret = birthday.getDay(); // return 6 for Saturday.
ret = birthday.getYear(); // returns the suffix of out year.
ret = birthday.getFullYear(); // returns the suffix of out year.
ret = today.getHours(); // returns the hour.
ret = today.getMinutes(); // returns the minutes.
ret = today.getSeconds(); // returns the seconds.
ret = today.getMilliseconds(); // returns the milliseconds.
ret = today.getTime() // returns timepassed since Jan 1 1970

birthday.setMonth(7)
birthday.setDate(7)
birthday.setFullYear(1777)
birthday.setHours(7)
birthday.setMinutes(55)
birthday.setSeconds(55)


// Output
console.log(birthday);
console.log(ret);
console.log(typeof ret); // returns object. Date is a Referrence data-type.
