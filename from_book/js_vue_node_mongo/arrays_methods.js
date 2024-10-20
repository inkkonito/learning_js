// !! modifying the array !!

// push
const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(9); // if logged return the index of the element added
console.log(numbers);

// pop
numbers.pop(); // delete and return the last element
console.log(numbers);

// shift
console.log(numbers.shift()); // return the element
console.log(numbers);

// unshift
console.log(numbers.unshift(-1)); // adds element at the beginning of the array
console.log(numbers);

// splice
numbers.splice(1, 1, 4);
console.log(numbers);

// sort
numbers.sort((a, b) => a - b);
console.log(numbers);

// reverse
numbers.reverse();
console.log(numbers);

// !! search methods !!
console.clear();
console.log(numbers);
console.log(numbers.find((elem) => elem <= 3)); // return first element matching the condition
console.log(numbers.findIndex((elem) => elem == -1)); // returns index of element matching
console.log(numbers.indexOf(3)); // return index of first element matching value
console.log(numbers.lastIndexOf(4)); // return last index of matching value
console.log(numbers.includes(-1)); // return true if value is part of the array

// !! iteration methods !!

const words = ["jean", "valjean", "tom", "jedusor"];

words.forEach((word, index, array) => (array[index] = word.toUpperCase())); // transform elements to capitals
console.log(words);

const modifiedWords = words.map((word) => word + "_post"); // new array with modification on each element
console.log(modifiedWords);

const shortWords = words.filter((word) => word.length < 4);
console.log(shortWords);

const longWords = words.some((word) => word.length > 5);
console.log(longWords);

const allLongWords = words.every((word) => word.length >= 3);
console.log(allLongWords);

const wordsSum = words.reduce((acc, val) => acc + " " + val);
console.log(wordsSum);

const wordsSumRight = words.reduceRight((acc, val) => acc + " " + val);
console.log(wordsSumRight);

// !! extract methods !!

console.log(words);
console.log(words.slice(1, 3));

const mergedArr = numbers.concat(words);
console.log(mergedArr);

console.log(mergedArr.join(","));

// !! creation/transformation methods

const arr = [1, 2, 3, [4, 5]];
console.log(arr);

console.log(arr.flat());

console.log(arr.flatMap((elem) => elem + "_hi"));
