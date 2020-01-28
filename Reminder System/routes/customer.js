const express = require('express')
const router = express.Router()
const { register, login, getMe } = require('../controller/customer')
router.post('/register', register)
  .post('/login', login)
  .get('/me', getMe)

module.exports = router
