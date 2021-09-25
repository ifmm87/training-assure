// Write a program to check whether two
// strings are anagram. An anagram is a word whose
// letters are contained in another word and both
// have the same number of letters.
// INPUT: sword, words
// OUTPUT: true

/**
 * checks if given two words are an anagram of each other
 * @param {string} str1
 * @param {string} str2
 * @return {boolean} 
*/
const anagram = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  if (orderString(str1) === orderString(str2)) return true
  return false;
}
const orderString = (str) => {
  return str.split('').sort().join('');
}
module.exports = { anagram };
