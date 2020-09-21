"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hashPassword", {
  enumerable: true,
  get: function get() {
    return _passwords.hashPassword;
  }
});
Object.defineProperty(exports, "verifyHash", {
  enumerable: true,
  get: function get() {
    return _passwords.verifyHash;
  }
});

var _passwords = require("./passwords");

console.log((0, _passwords.hashPassword)());