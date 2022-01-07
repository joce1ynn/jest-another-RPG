// const checkIfEqual = require("../lib/random.js");

// test(" checks if 10 is equal to 10", () => {
//   expect(checkIfEqual(10, 10)).toBe(true);
// });
// 测试读起来几乎像简单的英语,当测试失败时，应该很容易确定哪里出了问题。

const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});