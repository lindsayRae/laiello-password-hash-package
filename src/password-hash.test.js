
import { hashPassword, verifyHash } from './password-hash'

describe('hashPassword basic functionality', () => {

    const controlPass = hashPassword("testPassword")
    test('verifyHash is true when I pass "password" as the password', () => {
        expect(verifyHash("testPassword", controlPass)).toBe(true)
    }) 
})


