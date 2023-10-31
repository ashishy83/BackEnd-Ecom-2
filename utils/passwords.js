const bcrypt = require('bcrypt');
const saltRounds = 10;
const encodedPassword = async(password) =>{
    try {
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    } catch (error) {
        let message = 'Encryption Failed';
        if(error instanceof Error){
            message = error.message;
            throw new Error(message);
        }
    }
};


const verifyPassword = async (userPassword, hashedPassword) => {
    try {
      const isMatch = await bcrypt.compare(userPassword, hashedPassword);
      return isMatch;
    } catch (error) {
      console.error('Password comparison error: ', error);
      return false;
    }
  };
  

module.exports = {
    encodedPassword,
    verifyPassword
}