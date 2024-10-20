let catsName = ["chipie", "lilou", "freddie", "leo"];
console.log(catsName);
console.log(catsName.length); // return 4

console.log(catsName[0].charAt(0)); // return first letter of first element in array
let catsNameUppercase = catsName.map((elem) => elem.toUpperCase());
console.log(catsNameUppercase);

let catsFan = "J'adore les chats!";

console.log(catsFan.indexOf("a")); // return 2 (first a)
console.log(catsFan.lastIndexOf("a")); // return 14 (last a)

console.log(catsFan.substring(0, catsFan.indexOf(" "))); // return substring from 0 to first space "" so "J'adore";

let firstWordLength = catsFan.indexOf(" ") + 1;
console.log(firstWordLength);
console.log(catsFan.substr(0, firstWordLength)); // return string from 0 to 

// enconding special characters

let encodedString = encodeURIComponent(catsFan) // encoding
console.log(encodedString); // encoded string
console.log(decodeURIComponent(encodedString)); // decodedString


// regex 
let year = new RegExp("[0-9]{4}", "g");
console.log(year.test(1992)); // return true
console.log(year.test("a1992")); // return false
let txtYear = "199 888 0001 1992"
let match = year.exec(txtYear);
console.log(match[0]); // return 0001
console.log(txtYear.match(year)); // return 0001 & 1992

// maths

let whatsLeft = 9%3;
console.log(whatsLeft); // return 0
console.log(10%3); // return 1

console.log(Math.pow(2, 10)); // 1024 => 2*2*2*2*2*2*2*2*2*2
console.log(2 ** 10); // same   

// dates

let dt = new Date(2024, 5, 30, 16, 30, 0)
console.log(dt); 

console.log(new Date(2000, 1, 23, 10, 5, 20)) // dates with arguments (february is 1, jan 0)
console.log(new Date(293838383838)) // milliseconds since 01 01 1970;

console.log(dt.getDate()); // 30 
console.log(dt.getMonth()); // 05
console.log(dt.getFullYear()); // 2024
console.log(dt.getTime()); // time in ms since 01 01 1970

let yesterday = new Date(2024, 5, 29, 16, 30, 0);
console.log(yesterday);

let oneDayDiff = dt.getTime() - yesterday.getTime();
console.log(oneDayDiff / (1000 * 60 * 60)) // approx 24h

dt.setFullYear(2000);
console.log(dt);

// minuteries

let timerId = setTimeout(function() {
    let a = new Date();
    console.log(`New date created after three second : ${a}`)
}, 3000)
console.log(timerId);

let catLilou = {
  name: "lilou",
  color: "grey",
  age: 12,
};
console.log(catLilou);
