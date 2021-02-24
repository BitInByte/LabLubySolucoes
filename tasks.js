const task1 = (num, char) => {
    if(
        (!num || typeof num !== 'number') ||
        (!char || typeof char !== 'string')
    ){
        return "ERROR: Not a number and/or not a char";
    }
    // Fill an array with num positions and char values
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
  // [1, 2, [3], [4, 5]]

  // Recursive function where it will check if it is an array and if it is,
  // call it the self function to perform the same in the newest element
  return arr.reduce((acc, cv) => {
    //console.log(cv)
    return acc.concat(!cv.length ? cv : task8(cv))
  }, []);
}

const task9 = (arr, num) => {
  if(!arr || !Array.isArray(arr) || !num || typeof num !== 'number' ) return "ERROR: Invalid arguments!";

  // It loops through all the positions and try to find the remainder of the
  // current index + 1 to get a mathematical scale, if the remainder is 0
  // then it deletes everything inside the auxiliar array and push the values
  // to the accumulator
  let auxArr = [];
  return arr.reduce((acc, cv, index) => {
    auxArr.push(cv);
    if((index + 1) % num === 0 || (index + 1) === arr.length) {
      acc.push(auxArr);
      auxArr = [];
    }
    return acc;
  }, [])
}

const task10 = (arr1, arr2) => {
  // It will filter and check if the current value is inside the second array
  // with includes. If it is, then return the value to the array.
  return arr1.filter(val => arr2.includes(val))
}

module.exports = {
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
  task10
}

