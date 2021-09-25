//3. Write a program to remo ve all the repeated characters 
//in a string (not counting spaces)
//INPUT: this is a test
//OUTPUT: this a e
//
/**
  * removes a repeated character a string
  * @param  {string} str large string
  * @return {string} cleanArr string without repeated characters
  */
const removeChar = (str) => {
  // convert the string into an array
  const stringArr = str.split('');
  // array without repeated chars
  const cleanArr = [];
  //checking if str is empty
  if (str.trim() === '') return str;
  // iterating the array
  for (let char of stringArr) {
    // if char is an space, push into the cleanArr
    if (char === ' ' && cleanArr[cleanArr.length -1] !== ' ') {
      cleanArr.push(' ');
      continue;
    }
    // push if char does not exist inside clean arr
    if (!cleanArr.includes(char)) {
      cleanArr.push(char);
    }
  };
  return cleanArr.join('');
}
module.exports = {
  removeChar
};
