import { hashPassword, verifyHash } from './password-hash'
//import {verifyHash} from './password-verify'

export {
    hashPassword, 
    verifyHash
}

const hashedPasswordObj = hashPassword('13')
const verified =  verifyHash('123', hashedPasswordObj)

console.log('hashedPasswordObj', hashedPasswordObj)
console.log('verified: ', verified)