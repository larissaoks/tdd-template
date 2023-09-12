const { dummy } = require('../src/dummy');

test('Should return "This is a dummy"', () => {
  expect(dummy()).toBe('This is a dummy');
});
