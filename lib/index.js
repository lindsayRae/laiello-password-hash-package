"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hashPassword", {
  enumerable: true,
  get: function get() {
    return _passwordHash.hashPassword;
  }
});
Object.defineProperty(exports, "verifyHash", {
  enumerable: true,
  get: function get() {
    return _passwordVerify.verifyHash;
  }
});

var _passwordHash = require("./password-hash");

var _passwordVerify = require("./password-verify");

var hashedPasswordObj = (0, _passwordHash.hashPassword)('123456');
var verified = (0, _passwordVerify.verifyHash)('13456', hashedPasswordObj);
console.log(verified);