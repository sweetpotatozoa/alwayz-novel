const Service = require('../services/AdItemInfo_Service.js')

class AdIntemInfoController {
  async getAdItemInfo() {
    const result = await Service.getAdItemInfo()
    return result
  }
}

module.exports = new AdIntemInfoController()
