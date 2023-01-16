const webScrapService = require('../services/webScrapService');

const webScrapController = {
  async getData(req, res) {
    const data = await webScrapService.getData()
    res.status(200).json(data)
  }
}

module.exports = webScrapController;