import { hashPassword } from './password-hash'
import { verifyHash } from './password-hash'

export {
    hashPassword, 
    verifyHash
}

const hashedPasswordObj = hashPassword('123')
const verified =  verifyHash('123', hashedPasswordObj)

console.log('hashedPasswordObj', hashedPasswordObj)
console.log('verified: ', verified)