const PointRepo = require('../repositories/Point_Repo')

class PointService {
  async getPoint(userId) {
    const result = await PointRepo.getPoint(userId)
    return result
  }
  async updatePoint(userId) {
    const user = await PointRepo.getPoint(userId)

    const newPoint = user.currentPoint + 20
    const newWatchCount = user.todayWatchCount + 1
    const result = await PointRepo.updatePoint(userId, newPoint, newWatchCount)
    return result
  }
}

module.exports = new PointService()
