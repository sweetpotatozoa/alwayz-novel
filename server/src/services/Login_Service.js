const LoginRepo = require('../repositories/Login_Repo')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const configs = require('../utils/configs')

class LoginService {
  async getUser(userName) {
    const result = await LoginRepo.getUserByUserName(userName)
    return result
  }
  async validatePassword(input, password) {
    return input === password
  }
  async getToken(userId) {
    const tokenPayload = { user: { id: userId } }
    const token = jwt.sign(tokenPayload, configs.accessTokenSecret)
    return token
  }
}

module.exports = new LoginService()
