const mongoose = require('mongoose')

const ReminderSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, 'enter subject']
  },
  description: {
    type: String,
    required: [true, 'enter description']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Customer'
  }
})

const Reminder = mongoose.model('Reminder', ReminderSchema)

module.exports = Reminder
