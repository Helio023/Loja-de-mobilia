const express = require('express')
const app = require('../app')
const router = express.Router()
const viewController = require('./../controllers/viewController')

router.route('/').get(viewController.getIndex)

module.exports = router