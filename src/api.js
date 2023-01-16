const express = require('express');
require('express-async-errors')
//const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(express.json());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./utils/swagger.json')));

module.exports = app;
