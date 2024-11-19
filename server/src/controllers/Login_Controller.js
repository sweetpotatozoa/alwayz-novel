const LoginService = require('../services/Login_Service.js')

class LoginController {
  async login(userName, password) {
    try {
      const result = await LoginService.getUser(userName)
      if (result === null) {
        return { status: 404, message: 'User not found' }
      } else {
        if (await LoginService.validatePassword(password, result.password)) {
          const tokenResult = await LoginService.getToken(result._id)
          return { status: 200, token: tokenResult }
        } else {
          return { status: 401, message: 'Wrong password' }
        }
      }
    } catch (err) {
      return { status: 500, message: err.message }
    }
  }
}

module.exports = new LoginController()
