# laiello-password-hash-package
A set of utility functions to create a hash and salt for a password and varify that thye match.
## Installation
``` 
npm i laiello-password-hash-package
```
## Example
```javascript
// Import the functions 
import { hashPassword, verifyHash } from 'laiello-password-hash-package'

// Usage 
const hashedPasswordObj = hashPassword('123')// returns object
const verified =  verifyHash('123', hashedPasswordObj)// return true or false
```
## Functions
### hashedPasswordObj
Using npm 'crypto', to create a salt and hash for a given password. Given a string, returns a hashed password object that contains the hash and the salt.
| Parameter | Description           |
|-----------|-----------------------|
| string    | Password user entered |

### verifyHash
Method that takes the new password and the password object to verify that they are the same. 
| Parameter | Description                                               |
|-----------|-----------------------------------------------------------|
| string    | Phone numer user entered                                  |
| object    | Object that contains the hash and salt for passwoods match |
