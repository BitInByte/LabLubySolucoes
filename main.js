const { task1, task2, task3, task4, task5, task6, task7 } = require("./tasks.js");

console.log("Task 1: ", task1(3, 'a'));
console.log("Task 2 : ", task2([1, 2, 3, 4]));
console.log("Task 3: ", task3(['a', 3, undefined, null, '']));
console.log("Task 4: ", task4([["c",2],["d",4]]));
console.log("Task 5: ", task5([1, 3, 2, 6, 7, 5], 5, 2))
console.log("Task 6: ", task6([1,2,3,3,2,4,5,4,7,3]))
console.log("Task 7: ", task7([1,2,3,4],[1,2,3,4,5]));
