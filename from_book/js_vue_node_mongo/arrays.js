// practicing map
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((elem) => elem * 2));

const temperature = [0, 20, 37, 100];
console.log(temperature.map((elem) => elem * (9 / 5) + 32));

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
console.log(people.map((elem) => elem.name));

const words = ["hello", "world", "javascript"];
const firstLetterCapital = (arr) =>
  arr.map(function (elem) {
    return elem[0].toUpperCase() + elem.slice(1);
  });
console.log(firstLetterCapital(words));

const prices = [100, 200, 300];
const pricesWithTVA = (arr) => arr.map((elem) => elem * 1.2);
console.log(pricesWithTVA(prices));

// practicing filters

const randomNumbers = [1, 2, 3, 4, 5, 6];
const isNumberPair = (arr) => arr.filter((elem) => elem % 2 == 0);
console.log(isNumberPair(randomNumbers));

const ages = [10, 18, 22, 16, 40, 15];
const isAdult = (arr) => arr.filter((elem) => elem >= 18);
console.log(isAdult(ages));

const shortWords = ["hi", "hello", "cat", "world", "js"];
const isThreeLetters = (arr) => arr.filter((elem) => elem.length > 3);
console.log(isThreeLetters(shortWords));

const grades = [10, 12, 15, 8, 20, 5];
const gradesOverTen = (arr) => arr.filter((elem) => elem > 10);
console.log(gradesOverTen(grades));

const books = [
  { title: "Book 1", pages: 200 },
  { title: "Book 2", pages: 150 },
  { title: "Book 3", pages: 300 },
];
const longBooks = (arr) => arr.filter((elem) => elem.pages > 200);
console.log(longBooks(books));

// practicing reduce

const num = [1, 2, 3, 4, 5];
const sumNumbers = (arr) =>
  arr.reduce(function (acc, val) {
    console.log(`Current acc is : ${acc}, Current val is : ${val}`);
    return acc + val;
  });
console.log(sumNumbers(num));

const nums = [1, 2, 3, 4];
const multiplyNumbers = (arr) => arr.reduce((acc, val) => acc * val);
console.log(multiplyNumbers(nums));

const numsZ = [3, 5, 7, 2, 8];
const maxNum = (arr) => arr.reduce((acc, val) => (val > acc ? val : acc));
console.log(maxNum(numsZ));

const letters = ["a", "b", "a", "c", "a", "b"];
const lettersRepetition = (arr) => arr.reduce((acc, val) => (val === "a" ? acc + 1 : acc), 0);
console.log(lettersRepetition(letters));

const wordsPart = ["Hello", "world", "this", "is", "JS"];
const makePhrase = (arr) => arr.reduce((acc, val) => acc + " " + val, "").trim();
console.log(makePhrase(wordsPart));

const numsA = [1, 2, 3];
const getPairs = (arr) => arr.filter((nums) => nums % 2 == 0);
console.log(getPairs(numsA));

const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Watch", price: 150, category: "Fashion" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Headphones", price: 200, category: "Electronics" },
];

const productNames = products.map((elem) => elem.name);
console.log(productNames);

const discountedProducts = products.map((product) => ({
  name: product.name,
  discountedPrice: product.price * 0.9,
}));
console.log(discountedProducts);
