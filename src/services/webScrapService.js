const webScrap = require('../models/index');

const webScrapService = {
  async getData() {
    const data = await webScrap.getData();
    return data;
  }
}

module.exports = webScrapService;