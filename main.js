console.clear()
// Use a do...while loop to console.log the numbers from 1 to 1000.
const countNums = () => {
  let num = 0;
  do {
    num++;
    console.log(num)
  } while (num < 1000);
}
// countNums()
console.log(countNums())


// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female",

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};


// Create a function that logs out the keys to the object using Object.keys()
// const keysFunction = () => {
  console.log(Object.keys(person))

// Create a function that logs out the keys and values of the object using Object.entries()

console.log(Object.entries(person))

// Create an arrayOfPersons that contains multiple "people" objects. You can simplify copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
const arrayOfPersons = [
     person1 = {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"},
     person2 = {firstName: "John", lastName: "Doe", birthDate: "Jan 25, 1908", gender: "male"},
     person3 = {firstName: "Baby", lastName: "Doe", birthDate: "June 17, 1945", gender: "female"}
]
// console.log(arrayOfPersons)
// Create a function that uses a for..of loop and an if statement to console.log the value 
// associated with the key birthDate of each object if the birth year is an odd number.
const loopOverArray = (arrayOfPersons) => {
  for (birthDate of arrayOfPersons) {
    if (arrayOfPersons.entries(birthDate) %2 === 0){
    console.log(birthDate)}
  }
}
// console.log(loopOverArray(birthDate))
// Use .map() to map over the arrayOfPersons and console.log() their information.

// Use .filter() to filter the persons array and console.log 0only males in the array.

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

// BONUS - .filter() out the people in the array who are younger than 21.