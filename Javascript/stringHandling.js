// using string methods
let word = "skateboard";
let facialHair = word.slice(5).replace('o', 'e');

// creating range using Math.random() & evaluate expressions inside string
let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let msg = `You rolled a ${die1} & a ${die2}. They sum to ${die1+die2}.`
