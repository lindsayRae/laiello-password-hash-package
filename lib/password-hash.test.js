"use strict";

var _passwordHash = require("./password-hash");

describe('hashPassword basic functionality', function () {
  // test('hashPassword returns an object', () => {
  //     expect(hashPassword('123')).toBe({})
  // })
  var controlPass = (0, _passwordHash.hashPassword)("password");
  test('test', function () {
    expect((0, _passwordHash.verifyHash)("password", controlPass)).toBe(true);
  });
});