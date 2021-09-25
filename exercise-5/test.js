const { anagram } = require('./index');

test('Function anagram is defined', () => {
  expect(typeof anagram).toEqual('function');
});

test('sword is an anagram of words', () => {
  expect(anagram('sword', 'words')).toEqual(true);
});
test('rail safety is an anagram of fairy tales', () => {
  expect(anagram('rail safety', 'fairy tales')).toEqual(true);
});
