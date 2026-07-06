import * as readline from 'node:readline/promises';

//var numbers = [];
//var numbers = [1,2,3,4,5];
//var numbers = new Array(); // array constructor
//var numbers = new Array(1,2,3,4,5);
//var numbers = new Array(10);
var objects = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

console.log("Enter a name to search: ");
var name = readline();
var position = names.indexOf(name);
if (position >= 0) {
console.log("Found " + name + " at position " + position);
}
else {
console.log(name + " not found in array.");
}