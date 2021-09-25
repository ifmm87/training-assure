// 4. Write a program to convert vowels 
// into upper case character in a given string
// INPUT: testing
// OUTPUT: tEstIng
/**
 * returns all vowels capitalized
 * @param {string} str large string
 * return {string} string with vowels capitalized
  * */
const convertVowels = (str) => {
  const vowels = 'aeiouáéíóú';
  const newArr = str.split('').map((char, index) => {
    return vowels.indexOf(char) >= 0 ? char.toUpperCase() : char; 
  })
  return newArr.join('');
}
module.exports = { convertVowels };
