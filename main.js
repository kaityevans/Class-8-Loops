console.clear()
// Use a do...while loop to console.log the numbers from 1 to 1000.
// const countNums = () => {
//   let num = 0;
//   do {
//     num++;
//     console.log(num)
//   } while (num < 1000);
// }
// countNums()
// console.log(countNums())


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
const keysFunction = () => {
  console.log(Object.keys(person))
  }
  keysFunction()
// Create a function that logs out the keys and values of the object using Object.entries()
  const objectEntries = () => {
console.log(Object.entries(person))
  }
  objectEntries()
// Create an arrayOfPersons that contains multiple "people" objects. You can simplify copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
const arrayOfPersons = [
     person1 = {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"},
     person2 = {firstName: "John", lastName: "Doe", birthDate: "Jan 25, 1992", gender: "male"},
     person3 = {firstName: "Baby", lastName: "Doe", birthDate: "June 17, 1945", gender: "female"}
]
// console.log(arrayOfPersons)
// Create a function that uses a for..of loop and an if statement to console.log the value 
// associated with the key birthDate of each object if the birth year is an odd number.
const loopOverArray = () => {
  let year = '';
  let counter = 0;
  for (const birthDate of arrayOfPersons) {
    year = arrayOfPersons[counter].birthDate.slice(-4)
    let numYear = parseInt(year)
    if (numYear %2 == 1) {
    console.log(numYear)
    }
    counter ++
  }
}
loopOverArray()
// console.log(loopOverArray(birthDate))


// Use .map() to map over the arrayOfPersons and console.log() their information.
const map1 = arrayOfPersons.map(x => x)
console.log(map1)
// Use .filter() to filter the persons array and console.log 0only males in the array.
let maleOnly = arrayOfPersons.filter(y => y.gender == "male")
    console.log(maleOnly) 
  
// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
const birthBefore90 = () => {
  let beforeDate = arrayOfPersons.filter(z >= z.birthDate <= "Jan 1, 1990")
  for (birthDate of arrayOfPersons){
     if (beforeDate){
    console.log(beforeDate)
    return true
  }
    else {
      console.log()
      return false
    }
  }
}
console.log(birthBefore90())
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

