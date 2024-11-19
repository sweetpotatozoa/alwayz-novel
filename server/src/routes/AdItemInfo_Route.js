const express = require('express')

const router = express.Router()
const AdItemInfoController = require('../controllers/AdItemInfo_Controller')

router.get(
  '/',
  wrapAsync(async (req, res) => {
    const result = await AdItemInfoController.getAdItemInfo()
    // console.log('adroute', result)
    return res.status(200).send({ status: 200, ...result })
  }),
)

function wrapAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}

module.exports = router
