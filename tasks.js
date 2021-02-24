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

  return arr.filter(value => value);

}

module.exports = {
  task1,
  task2,
  task3,
}
