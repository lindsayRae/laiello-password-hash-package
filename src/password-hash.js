import crypto from 'crypto'

/**
 * @method hashPassword
 * @description Method, using npm 'crypto', to create a salt and hash for a given password
 * @param {String} password - Password user provides
 * @returns {Object} passObj - Object that contains the hashed password and the salt
 */

export const hashPassword = (password) => {

    const salt = crypto.randomBytes(16).toString('hex')    
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

    const passObj = {
        hash,
        salt        
    }
  
    return passObj
}