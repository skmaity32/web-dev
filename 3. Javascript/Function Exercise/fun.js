// 1.
// function rant(rantMessage) {
//     for (let i = 1; i <= 3; i++)
//         console.log(rantMessage.toUpperCase());
// }

// rant('I hate beets');

/**-------------------------------------------------------------------------------------------------------------- */

// 2.
// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(capitalize('eggplant'));
// console.log(capitalize('squid'));
// console.log(capitalize('pamplemousse'));

/**-------------------------------------------------------------------------------------------------------------- */

// 3.
// let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// function returnDay(dayNo) {
//     if (dayNo <= 0 || dayNo > 7)
//         return null;
//     return daysOfWeek[dayNo - 1];
// }

// console.log(returnDay(1));
// console.log(returnDay(7));
// console.log(returnDay(4));
// console.log(returnDay(0));

/* ------------------------------------------------------------------------------------------------------------- */

// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 
// area should accept the length of a side (all sides are the same in a square) and then return the side squared. 
// perimeter should accept the length of a side and return that side multiplied by 4.

// square.area(10) //100
// square.perimeter(10) //40

// const square = {
//     area(length) {
//         return length * length;
//     },
//     perimeter(length) {
//         return 4*length;
//     }
// }

/**-------------------------------------------------------------------------------------------------------------- */

// Instructions
// Define an object called hen.  It should have three properties:

// name should be set to 'Helen'

// eggCount should be set to 0

// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

// const hen = {
//     name: 'helen',
//     eggcount: 0,
//     layAnEgg() {
//         this.eggcount++;
//         return "EGG";
//     }
// }

/**-------------------------------------------------------------------------------------------------------------- */