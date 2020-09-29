"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyHash = exports.hashPassword = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @method hashPassword
 * @description Method, using npm 'crypto', to create a salt and hash for a given password
 * @param {String} password - Password user provides
 * @returns {Object} passObj - Object that contains the hashed password and the salt
 */
var hashPassword = function hashPassword(password) {
  try {
    var salt = _crypto["default"].randomBytes(16).toString('hex');

    var hash = _crypto["default"].pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    return {
      hash: hash,
      salt: salt
    };
  } catch (error) {
    return false;
  }
};
/**
  * @method verifyHash
  * @description
  * Method that takes the new password and the password object to verify that they are the same.
  * @param {String} newPassword - string that is provided by the user
  * @param {Object} passObj - password Object that containes the hash and salt
  * @returns {Boolean} boolean - returns true or false after password comparison
  */


exports.hashPassword = hashPassword;

var verifyHash = function verifyHash(newPassword, passObj) {
  try {
    var hash = _crypto["default"].pbkdf2Sync(newPassword, passObj.salt, 1000, 64, 'sha512').toString('hex');

    var passwordsMatch = passObj.hash === hash;
    return passwordsMatch;
  } catch (error) {
    return false;
  }
};

exports.verifyHash = verifyHash;