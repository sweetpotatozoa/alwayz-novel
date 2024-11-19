const mongodb = require('../utils/mongodb')

class MainRepo {
  constructor() {
    this.db = mongodb.mainDb
    this.collection = this.db.collection('adItemInfo')
  }

  async getAdItemInfo() {
    const result = await this.collection
      .aggregate([{ $sample: { size: 1 } }])
      .toArray()
    return result[0]
  }
}

module.exports = new MainRepo()
