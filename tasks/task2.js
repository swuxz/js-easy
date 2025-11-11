// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let filteredChars = [];

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      filteredChars.push(str[i]);
    }
  }

  return filteredChars.reverse().join('');
}

console.log(reverseWithoutNumbers("hello123world456"));
console.log(reverseWithoutNumbers("abc123xyz"));

module.exports = reverseWithoutNumbers;