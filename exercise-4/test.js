const { convertVowels } = require('./index');

test('Function convert vowels to upper case is defined', () => {
  expect(typeof convertVowels).toEqual('function');
});

test('Function is defined has to be equal to FUnctIOn Is dEfInEd', () => {
  expect(convertVowels('Function is defined')).toEqual('FUnctIOn Is dEfInEd');
});

test('iván mújica', () => {
  expect(convertVowels('iván mújica')).toEqual('IvÁn mÚjIcA');
});
