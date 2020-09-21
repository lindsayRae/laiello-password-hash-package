"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @method hashPassword
 * @description Method, using npm 'crypto', to create a salt and hash for a given password
 * @param {String} password - Password user provides
 * @returns {Object} passObj - Object that containse the hashed password and the salt
 */
var hashPassword = function hashPassword(password) {
  var salt = _crypto["default"].randomBytes(16).toString('hex');

  var hash = _crypto["default"].pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

  var passObj = {
    hash: hash,
    salt: salt
  };
  return passObj;
};

exports.hashPassword = hashPassword;