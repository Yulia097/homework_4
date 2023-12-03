// реалізувати реверс стрінги (вивод в зворотньому порядку)

// variant 1
let name = 'I love mango';

for (let i = name.length - 1; i >= 0; i--) {
  console.log(name.charAt(i));
}

// variant 2

let string = 'I want to leave in a peaceful world';
let reversedString = '';

for (symbol of string) {
  reversedString = symbol + reversedString;
}

console.log(reversedString);

// variant 3

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed.concat(str[i]);
  }
  console.log(reversed);
  return reversed;
}

reverseString('Cookies');
