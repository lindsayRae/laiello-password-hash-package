import crypto from 'crypto'

/** 
  * @method verifyHash
  * @description Method that takes the new password and the password object to verify that they are the same. 
  * @param {String} newPassword - string that is provided by the user
  * @param {Object} passObj - password Object that containes the hash and salt
  * @returns {Boolean} boolean - returns true or false after password comparison
  */

 export const verifyHash = (newPassword, passObj) => {

    const hash = crypto.pbkdf2Sync(newPassword, passObj.salt, 1000, 64, 'sha512').toString('hex')    
    const passwordsMatch = passObj.hash === hash
    
    return passwordsMatch
}