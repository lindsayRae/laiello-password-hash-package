"use strict";

var _passwordHash = require("./password-hash");

describe('hashPassword basic functionality', function () {
  var controlPass = (0, _passwordHash.hashPassword)("testPassword");
  test('verifyHash is true when I pass "testPassword" as the password', function () {
    expect((0, _passwordHash.verifyHash)("testPassword", controlPass)).toBe(true);
  });
  test('verifyHash is false when I pass "badPassword" as the password', function () {
    expect((0, _passwordHash.verifyHash)("badPassword", controlPass)).toBe(false);
  });
  test('verifyHash is false when I pass "" as the password', function () {
    expect((0, _passwordHash.verifyHash)("", controlPass)).toBe(false);
  });
  test('verifyHash is false when I pass null as the password', function () {
    expect((0, _passwordHash.verifyHash)(null, controlPass)).toBe(false);
  });
});