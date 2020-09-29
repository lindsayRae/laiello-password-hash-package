"use strict";

var _passwordHash = require("./password-hash");

describe('hashPassword basic functionality', function () {
  var controlPass = (0, _passwordHash.hashPassword)("testPassword");
  test('verifyHash is true when I pass "password" as the password', function () {
    expect((0, _passwordHash.verifyHash)("testPassword", controlPass)).toBe(true);
  });
});