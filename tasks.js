const task1 = (num, char) => {
    if(
        (!num || typeof num !== 'number') ||
        (!char || typeof char !== 'string')
    ){
        return "ERROR: Not a number and/or not a char";
    }
    return Array(num).fill(char);
}

const task2 = (arr) => {
    if(!arr || !Array.isArray(arr)) return "ERROR: Invalid Array!";

  // Executes a map which returns a new array and then going through
  // each position, starting from the last position and removing
  // according the index actual loop position
    return arr.map((item, index) => arr[arr.length-1-index])
}

const task3 = (arr) => {
  if(!arr || !Array.isArray(arr)) return "ERROR: Invalid Array!";

  // Filter filters a value, since undefined, null, empty strings
  // and so on are not a valid value, filter doesn't return that.
  return arr.filter(value => value);

}

const task4 = (arr) => {
  if(!arr || !Array.isArray(arr)) return "ERROR: Invalid Array!";

  // Since the array have 2 entries in each array inside, fromEntries
  // will convert each array into a key value pairs which will use the first
  // entry as a key and the second entry as a value
  return Object.fromEntries(arr);
}

const task5 = (arr, ...args) => {
  if(!arr || !Array.isArray(arr)) return "ERROR: Invalid Array!";

  // By deafult, arrays have the method includes which return true or false
  // of the element is on the array, combined with filter we can select
  // an array of arguments to check if they are on the first array argument
  return arr.filter(el => !args.includes( el ));
}

const task6 = (arr) => {
  if(!arr || !Array.isArray(arr)) return "ERROR: Invalid Array!";

  // Since a set doens't allow duplicated values, we can set a new
  // set based on the array provided and then spread it into a new array
  return [...new Set(arr)];

}

const task7 = (arr1, arr2) => {
  if(!arr1 || !Array.isArray(arr1) || !arr2 || !Array.isArray(arr2)) return "ERROR: Invalid Array!";

  // Since arrays are reference types, we cannot compare them with equality
  // operation because they old a reference in memory, so, to perform
  // this type of operation, we can convert them into string, since strings
  // are primitive types and equality operations are allowed between
  // primitive types

  return arr1.toString() === arr2.toString();
}

const task8 = (arr) => {
  if(!arr || !Array.isArray(arr)) return "ERROR: Invalid Array!";

  return arr.map(elem => {
    if(elem.length) {
      const array = [];
      x = 15;


    }
  })
}


module.exports = {
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
}

