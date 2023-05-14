const express = require('express');
const routes = express.Router();
const controller = require('../controller/index.controller')
routes.post('/',controller.SayHello);
routes.post('/twit',controller.sendTwitter);
routes.post('/webhook',controller.webHook)
routes.get('/',controller.runUp);

module.exports = routes;