//Задание 1
let array = [1, 5, 4, 10, 0, 3];

for (let element of array) {
  if (element === 10) {
    break;
  }
  console.log(element);
}
//Задание 2
let indexOfFour = array.indexOf(4);
console.log("Позиция числа 4:", indexOfFour);

//Задание 3 
const numbers = [1, 3, 5, 10, 20];

const result = numbers.join(' ');

console.log(result);

//Задание 4
const array1 = [];
for (let i = 0; i < 3; i++) {
  const subArray = [];
  for (let j = 0; j < 3; j++) {
    subArray.push(1);
  }
  array1.push(subArray);
}
console.log(array1);
//Задание 5
let arr = [1, 1, 1];
arr.push(2, 2, 2);

console.log(arr);
//Задание 6
const arr2 = [9, 8, 7, 'a', 6, 5];
arr2.sort();

for (let i = 0; i < arr2.length; i++) {
  if (typeof arr[i] === 'string') {
    arr2.splice(i, 1);
    i--;
  }
}

console.log(arr3);
//Задание 7
let arr3 = [9, 8, 7, 6, 5];
let userInput = prompt("Угадай число");

if (arr3.includes(Number(userInput))) {
  alert("Угадал");
} else {
  alert("Не угадал");
}
//Задание 8
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
//Задания 9
const arr4 = [[1, 2, 3], [4, 5, 6]];
const flatArray = arr4.flat();
console.log(flatArray);
//Задание 10 
let numbers1 = [1, 5, 3, 8, 2, 4, 7, 10, 9, 6];

for (let i = 0; i < numbers1.length - 1; i++) {
  let sum = numbers1[i] + numbers1[i + 1];
  console.log(sum);
}
//Задание 11
function squareNumbers(arr) {
    var squares = [];
  
    for (var i = 0; i < arr.length; i++) {
      squares.push(arr[i] * arr[i]);
    }
  
    return squares;
  }