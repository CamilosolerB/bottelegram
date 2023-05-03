const express = require('express');
const routes = express.Router();
const controller = require('../controller/index.controller')
routes.post('/',controller.SayHello);
routes.post('/twit',controller.sendTwitter);

module.exports = routes;