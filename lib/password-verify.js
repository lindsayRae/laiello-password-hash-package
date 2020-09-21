"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyHash = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** 
  * @method verifyHash
  * @description Method that takes the new password and the password object to verify that they are the same. 
  * @param {String} newPassword - string that is provided by the user
  * @param {Object} passObj - password Object that containes the hash and salt
  * @returns {Boolean} boolean - returns true or false after password comparison
  */
var verifyHash = function verifyHash(newPassword, passObj) {
  var hash = _crypto["default"].pbkdf2Sync(newPassword, passObj.salt, 1000, 64, 'sha512').toString('hex');

  var passwordsMatch = passObj.hash === hash;
  return passwordsMatch;
};

exports.verifyHash = verifyHash;