const express = require('express')
const router = express.Router()
const testController = require('../controllers/test.controller').ping

const routes = (app) => {
  router.get('/', testController)

  app.use('/api/ping', router)
}

module.exports = routes
