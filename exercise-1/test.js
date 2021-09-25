const { maximumOcurring } = require('./index');

test('function maximyn ocurring character is defined', () => {
expect(typeof maximumOcurring).toEqual('function');
});

test('Hi this is a test', () => {
  expect(maximumOcurring('Hi this is a test')).toEqual('i');
});

test('Gilberto Godoy Filho', () => {
  expect(maximumOcurring('Gilberto Godhoy Filho')).toEqual('o');
});

test('Ricardinho Garcia', () => {
  expect(maximumOcurring('Ricardinho Garcia')).toEqual('r');
});
