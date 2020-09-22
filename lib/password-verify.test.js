"use strict";

var verifyHash = require('./password-verify');

test('New password should match hashed password', function () {
  expect(verifyHash('987', passObj).toBe(true));
});