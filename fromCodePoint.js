/*
JavaScript String fromCodePoint()
The JavaScript String fromCodePoint() method returns a string created by using the given sequence of code points.

The fromCodePoint() method returns a string created by using the given sequence of unicode code points.
*/

// returns a string of characters represented by unicode 65, 66 and 67

let alphabets = String.fromCodePoint(65, 66, 67);
console.log(alphabets);  // ABC



let alphabets1 = String.fromCodePoint(10, 50, 100, 50);
console.log(alphabets1);  // 2d2


