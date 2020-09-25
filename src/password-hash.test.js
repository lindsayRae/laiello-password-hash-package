
import { hashPassword } from './password-hash'

// test('Returns an object ', () => {
//     expect(hashPassword(null)).toBeNull();
// })

describe('hashPassword basic functionality', () => {
    
    test('hashPassword is false when I pass null', () => {
        expect(hashPassword(null)).toBe(false)
    })
})

