// 1. Write a program to find maximum 
// occurring character in a string
// INPUT: Hi this is a test
// OUTPUT: i
// TODO what happens if there are more than one maximumO ocurring

/**
  * find the maximum repeated character in a string
  * @param  {string} str large string
  * @return {string} maxRepeatedCha
  */
const maximumOcurring = (str) => {
  // we are goint to use a map
  const strMap = {};
  let maxRepeated = 0, maxRepeatedChar = '';
  // convert str to lowercase and clean spaces
  str = str.toLowerCase().replace(/ /g, '');
  // map the string
  for (let char of str) {
    strMap[char] = strMap[char] ? strMap[char] + 1 : 1;
  }
  // finding the maximum occurring char
  Object.keys(strMap).forEach((key) => {
    if (strMap[key] > maxRepeated) {
      maxRepeated = strMap[key];
      maxRepeatedChar = key;
    }
  });
  return maxRepeatedChar;
}

module.exports = {
  maximumOcurring
}
