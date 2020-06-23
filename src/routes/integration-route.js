'use strict'

const express = require('express');
const route = express.Router();
const controller = require('../controllers/integration-controller');

route.get(`/${process.env.DEFAULT_URL}/health-check`, controller.healthCheck);
route.get(`/${process.env.DEFAULT_URL}/integrations`, controller.getIntegrations);
route.post(`/${process.env.DEFAULT_URL}/integrations`, controller.createIntegration);

route.get(`/${process.env.DEFAULT_URL}/countries`, controller.getCountries);
route.post(`/${process.env.DEFAULT_URL}/states`, controller.getStates);
route.post(`/${process.env.DEFAULT_URL}/cities`, controller.getCities);

module.exports = route;