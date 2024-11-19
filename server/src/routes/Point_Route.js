const express = require('express')
const auth = require('../middleware/auth')

const router = express.Router()
const Controller = require('../controllers/Point_Controller')

router.get(
  '/',
  auth,
  wrapAsync(async (req, res) => {
    const result = await Controller.getPoint(req.user.id)
    return res.status(200).send({ status: 200, ...result })
  }),
)

router.put(
  '/',
  auth,
  wrapAsync(async (req, res) => {
    const result = await Controller.updatePoint(req.user.id)
    return res.status(200).send({ status: 200, ...result })
  }),
)

function wrapAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}

module.exports = router
