const express = require('express')
const auth = require('../middleware/auth')
const LoginController = require('../controllers/Login_Controller.js')

const router = express.Router()

router.post(
  '/',
  wrapAsync(async (req, res) => {
    const result = await LoginController.login(
      req.body.userName,
      req.body.password,
    )
    return res.status(result.status).send(result)
  }),
)

function wrapAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}
module.exports = router
