// index.test.js
const addNumbers = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(addNumbers(1, 2)).toBe(3);
});
