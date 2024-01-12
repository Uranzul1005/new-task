const names = ["bold", "ariunaa", "od", "bat"];

function longName(name) {
  if (name.length > 3) {
    return true;
  } else {
    return false;
  }
}

const result = names.filter(longName);
console.log(result);

// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.filter()
function birthYear(invent) {
  if (invent.year < 1600 && invent.year >= 1500) {
    return true;
  } else {
    return false;
  }
}

const result1 = inventors.filter(birthYear);
console.log(result1);

// Array.map()

function fullName(full) {
  return [full.first, full.last];
}

const result2 = inventors.map(fullName);
console.log(result2);

// const result2 = inventors.map((full) => {
//   return [full.first, full.last];
// });
// console.log(result2);

// Array.sort()
const result3 = inventors.sort((a, b) => {
  return a.year - b.year;
});

console.log(result3);

// Array.sort()
const result4 = inventors.slice().sort((a, b) => {
  return a.passed - a.year - (b.passed - b.year);
});

console.log(result4);

// Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Array.map()
// 2. Give us an array of the inventors first and last names

// Array.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// 4. Sort the inventors by years lived
