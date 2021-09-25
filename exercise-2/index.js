//2. Write a program to find the largest and smallest word in a string
// INPUT: It is a string with smallest and largest word
// OUTPUT: {largest: 'smallest', smallest: 'a'}
//
/**
  * find largest and Smallest word in a string
  * @param  {string} str large string
  * @return {object} largest and smallest
  */
const largestSmallest = (str) => {
  let largest, smallest;
  let strMap = {};
  let strArr = [];
  for (let word of str.split(' ')) {
    if (!word.length) continue;
    strMap[word.length] = word;
    strArr.push(word.length);
  }
  smallest = strMap[Math.min(...strArr)];
  largest = strMap[Math.max(...strArr)];

  return { largest, smallest };

}

module.exports = {
  largestSmallest
}
