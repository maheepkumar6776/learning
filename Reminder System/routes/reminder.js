const express = require('express')
const { protect } = require('../middleware/protect')
const router = express.Router()
const { getRemindersNow, getRemindersUpcoming, getRemindersPrevious, addReminder } = require('../controller/reminder')
router.get('/now', protect, getRemindersNow)
  .get('/upcoming', protect, getRemindersUpcoming)
  .get('/previous', protect, getRemindersPrevious)
  .post('/', protect, addReminder)

module.exports = router
