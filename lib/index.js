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
    return _passwordHash.verifyHash;
  }
});

var _passwordHash = require("./password-hash");

//import {verifyHash} from './password-verify'
var hashedPasswordObj = (0, _passwordHash.hashPassword)('13');
var verified = (0, _passwordHash.verifyHash)('123', hashedPasswordObj);
console.log('hashedPasswordObj', hashedPasswordObj);
console.log('verified: ', verified);