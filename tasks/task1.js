// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  const vowels = "aeiouy";

  let result = str.split('');

  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i].toLowerCase())) {
      result[i] = '*';
    }
  }

  return result.join('');
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;