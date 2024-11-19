const AdItemInfoRepo = require('../repositories/AdItemInfo_Repo')

class AdItemInfoService {
  async getAdItemInfo() {
    const result = await AdItemInfoRepo.getAdItemInfo()
    return result
  }
}

module.exports = new AdItemInfoService()
