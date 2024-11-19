const mongodb = require('../utils/mongodb')
const mongoose = require('mongoose')

class MainRepo {
  constructor() {
    this.db = mongodb.mainDb
    this.collection = this.db.collection('point')
  }

  async getPoint(userId) {
    const result = await this.collection.findOne({
      userId: new mongoose.Types.ObjectId(userId),
    })

    return result
  }
  async updatePoint(userId, newPoint, newWatchCount) {
    const result = await this.collection.updateOne(
      { userId: new mongoose.Types.ObjectId(userId) },
      { $set: { currentPoint: newPoint, todayWatchCount: newWatchCount } },
    )
    return result
  }
  async reset() {
    const result = await this.collection.updateMany(
      {},
      { $set: { todayWatchCount: 0 } },
    )
    console.log(result)
  }
}

module.exports = new MainRepo()
