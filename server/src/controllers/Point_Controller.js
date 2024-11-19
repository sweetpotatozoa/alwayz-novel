const Service = require('../services/Point_Service.js')

class PointController {
  async getPoint(userId) {
    const result = await Service.getPoint(userId)
    return result
  }
  async updatePoint(userId) {
    const result = await Service.updatePoint(userId)
    return result
  }
}

module.exports = new PointController()
