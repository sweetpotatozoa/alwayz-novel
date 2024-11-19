const mongodb = require('../utils/mongodb')

class MainRepo {
  constructor() {
    this.db = mongodb.mainDb
    this.collection = this.db.collection('user')
  }

  async getUserByUserName(userName) {
    const result = await this.collection.findOne({ userName: userName })

    return result
  }
}

module.exports = new MainRepo()
