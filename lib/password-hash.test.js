"use strict";

var _passwordHash = require("./password-hash");

// test('Returns an object ', () => {
//     expect(hashPassword(null)).toBeNull();
// })
describe('hashPassword basic functionality', function () {
  test('hashPassword is false when I pass null', function () {
    expect((0, _passwordHash.hashPassword)(null)).toBe(false);
  });
});