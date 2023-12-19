const dateTime = require("./datetime.js");
const calc = require("./calc.js");
const books = require("./books.js");

console.log(calc.getSum(5, 5));
console.log(dateTime.today);
dateTime.greetings();
console.log(books.books[2].title);
console.log("End of Program");
