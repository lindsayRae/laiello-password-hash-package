import crypto from 'crypto'

/**
 * @method hashPassword
 * @description Method, using npm 'crypto', to create a salt and hash for a given password
 * @param {String} password - Password user provides
 * @returns {Object} passObj - Object that contains the hashed password and the salt
 */

export const hashPassword = (password) => {

    try {
        const salt = crypto.randomBytes(16).toString('hex')    
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
  
        return { hash, salt } 
    } catch (error) {
        return false
    }       
}

/** 
  * @method verifyHash
  * @description Method that takes the new password and the password object to verify that they are the same. 
  * @param {String} newPassword - string that is provided by the user
  * @param {Object} passObj - password Object that containes the hash and salt
  * @returns {Boolean} boolean - returns true or false after password comparison
  */

 export const verifyHash = (newPassword, passObj) => {

    try {
        const hash = crypto.pbkdf2Sync(newPassword, passObj.salt, 1000, 64, 'sha512').toString('hex')    
        const passwordsMatch = passObj.hash === hash
    
        return passwordsMatch
    } catch (error) {
        return false
    }
    

}

