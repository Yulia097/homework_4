// вивести тільки парні числа з масиву, вивести в зворотньому порядку

let array = [1, 33, 10, 4, 5, 93, 33, 44, 55, 24, 56, 68];
let reversedString = '';
let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    newArray.push(array[i]);
  }
}
for (let j = newArray.length - 1; j >= 0; j--) {
  reversedString += newArray[j] + ' ';
}

console.log(reversedString);
