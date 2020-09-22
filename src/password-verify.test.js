const verifyHash = require('./password-verify')

test('New password should match hashed password', () => {
    expect(verifyHash('987', passObj).toBe(true))
})