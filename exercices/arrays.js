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
