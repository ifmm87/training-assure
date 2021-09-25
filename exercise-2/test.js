const { largestSmallest } = require('./index.js');

test('function largest and smallest word is defined', () => {
  expect(typeof largestSmallest).toEqual('function');
});

test('It is a string with smallest and largest word', () => {
  const result = largestSmallest('It is a string with smallest and largest word ');
  expect(result).toHaveProperty('largest');
  expect(result).toHaveProperty('smallest');
  const { smallest, largest } = result;
  expect(smallest).toEqual('a');
  expect(largest).toEqual('smallest');
});

test('Walking in the air', () => {
  const result = largestSmallest('Walking in the air');
  expect(result).toHaveProperty('largest');
  expect(result).toHaveProperty('smallest');
  const { smallest, largest } = result;
  expect(smallest).toEqual('in');
  expect(largest).toEqual('Walking');
})
