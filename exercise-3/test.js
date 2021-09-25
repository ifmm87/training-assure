const { removeChar } = require('./index');

test('Function remove repeated character is defined', () => {
  expect(typeof removeChar).toEqual('function');
});
test('this is a test my friend has to be this a e my frnd', () => {
  expect(removeChar('this is a test my friend')).toEqual('this a e my frnd');
});

test('this is a test has to be this a e', () => {
  expect(removeChar('this is a test')).toEqual('this a e');
});

test('empty string', () => {
  expect(removeChar('   ')).toEqual('   ');
});
