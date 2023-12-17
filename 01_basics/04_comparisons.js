console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
//Note that the equality check == and the comparisons > < >= <= work differently.
// Comparisons convert null to number, treating it as 0. That's why null>=0 is true and null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === Strict Check

console.log("2" === 2);


