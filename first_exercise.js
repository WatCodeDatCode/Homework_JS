var readlineSync = require('readline-sync');
 
// Ask for user response.
var name = readlineSync.question('May I have your name? ');
console.log('Hello ' + name + ', welcome to the Learn to Code course!'); //Prints user response to console