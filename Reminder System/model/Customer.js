const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const CustomerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'enter a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'enter email'],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ]
  },
  password: {
    type: String,
    select: false
  }
})

CustomerSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})
const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer
