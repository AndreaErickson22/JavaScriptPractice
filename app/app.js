
// CHALLENGE 1 REVERSE A STRING
// function reverseString(str) {
//   const strArr = str.split('');
//   strArr.reverse();
//   console.log(strArr);
//   return strArr.join('');
// }
// function reverseString(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

/////////////////////////
// function reverseString(str) {
//   let revString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
//   }
//   return revString;
// }
///////////////////////////
// function reverseString(str) {
//   let revString = '';
//   for (let i = 0; i <= str.length - 1; i++) {
//     revString = str[i] + revString;
//   }
//   return revString;
// }
///////////////////////////
// function reverseString(str) {
//   let revString = '';
//   for (let char of str) {
//     revString = char + revString;
//   }
//   return revString;
// }
///////////////////////////
// function reverseString(str) {
// let revString = '';
// str.split('').forEach(char => revString = char + revString);
// return revString;
// }
///////////////////////
// function reverseString(str) {
//   return str.split('').reduce((revString, char) => char +
//     revString, '');
// }
// const output = reverseString('hello');
// console.log(output);

// next challenge 2. VALIDATE A PALINDROME, Return True if palindrome and false if not. ex. isPalindrome('racecar')==='true', isPalindrome('hello')==false
// function isPalindrome(str) {
//   const revString = str.split('').reverse().join('');
//   return revString === str;
// }
// const output = isPalindrome('madam');
// console.log(output);
/////////////////////////////////////////
//CHALLENGE 3 REVERSE AN INTEGER
// function reverseInt(int) {
//   const revString = int.toString().split('').reverse().join('');
//   return parseInt(revString) * Math.sign(int);
// }
// const output = reverseInt(-12345);
// console.log(output);

/////////////////////////////////////////
// CHALLENGE 4 CAPITALIZE LETTERS capitalize the first letter of each word. ('i love javascript') should return ('I Love Javascript')
// function capitalizeLetters(str) {
//   const strArr = str.toLowerCase().split(' ');

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(' ');
// }
// const output = capitalizeLetters('i love javascript');
// console.log(output);

////////////////////////////////
// function capitalizeLetters(str) {

//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substr(1)
//     )
//     .join(' ');
// }
// const output = capitalizeLetters('i love javascript');
// console.log(output);

////////////////////////////////
// function capitalizeLetters(str) {

//   return str.replace(/\b[a-z]/gi, function (char) {
//     return char.toUpperCase();
//   });

// }
// const output = capitalizeLetters('i love gromits');
// console.log(output);

// CHALLENGE 5 MAX CHARACTER
// RETURN THE CHARACTER THAT IS MOST COMMON INTHE STRING
// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = '';

//   str.split('').forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   for (let char in charMap) {
//     // debugger;
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
// const output = maxCharacter('i love gromittttts');
// console.log(output);

//////////////////////////
//CHALLENGE 6: FizzBuzz 
// function fizzBuzz() {
//   for (let i = 1; i <= 101; i++) {
//     if (i % 15 === 0) {
//       console.log('Fizz Buzz')
//     } else if (i % 3 === 0) {
//       console.log('Fizz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     } else {
//       console.log(i);
//     }
//   }
// }
// const output = fizzBuzz();
// console.log(output);