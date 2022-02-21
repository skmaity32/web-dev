// const cleanNames = stringsArray => {
//     return stringsArray.map(string => string.trim());
// }

// cleanNames([" timothee", "   darth_hater", "sassyfrassy   ", " elton john   "]);

// --------------------------------------------------------------------------------------------------------------------------

// const greet = name => {
//     console.log(`Hey ${name}!`);
// }

// greet("Hagrid") //"Hey Hagrid!" 
// greet("Luna") //"Hey Luna!"

// --------------------------------------------------------------------------------------------------------------------------

// const validUserNames = userNames => userNames.filter(name => name.length < 10);

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);

// --------------------------------------------------------------------------------------------------------------------------

const allEvens = numArray => numArray.every(num => num % 2 == 0);

allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false