// реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)

function isPalindrome(str) {
  let reversedString = '';
  for (symbol of str) {
    reversedString = symbol + reversedString;
  }
  if (reversedString == str) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isPalindrome('sgvduwsbu');
isPalindrome('mam');

// variant 2

function isPalindrom(str) {
  let reversedString = '';

  for (const symbol of str) {
    reversedString = symbol + reversedString;
  }

  return reversedString === str;
}

console.log(isPalindrom('Mango'));
console.log(isPalindrom('lol'));
