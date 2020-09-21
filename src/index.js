import {hashPassword} from './password-hash'
import {verifyHash} from './password-verify'

export {
    hashPassword, 
    verifyHash
}

const hashedPasswordObj = hashPassword('123456')
const verified =  verifyHash('13456', hashedPasswordObj)

console.log(verified)