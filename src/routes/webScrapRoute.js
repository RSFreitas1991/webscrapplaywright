const { Router } = require('express')
const webScrapController = require('../controllers/webScrapController')

const webScrapRouter = Router();

webScrapRouter.get('/', webScrapController.getData);

module.exports = webScrapRouter;