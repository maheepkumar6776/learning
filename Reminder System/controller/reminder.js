const Reminder = require('../model/Reminder')
var ObjectId = require('mongoose').Types.ObjectId
exports.addReminder = async (req, res) => {
  req.body.customer = req.customer._id
  try {
    const reminder = await Reminder.create(req.body)
    res.send({
      data: reminder
    })
  } catch (err) {
    res.status(400).send({ err: err })
  }
}

exports.getRemindersNow = async (req, res) => {
  console.log('req.customer._id', new ObjectId(req.customer._id).toString())
  try {
    const data = await Reminder.find({
      customer: new ObjectId((req.customer._id).toString()),
      createdAt: {
        $lte: new Date().setDate(new Date().getDate()),
        $gte: new Date().setDate(new Date().getDate() - 1)
      }
    })
    console.log(data)
    res.send({
      data: data
    })
  } catch (err) {
    res.status(400).send({ err: err })
  }
}

exports.getRemindersUpcoming = async (req, res) => {
  try {
    const data = await Reminder.find({
      customer: new ObjectId((req.customer._id).toString()),
      createdAt: {
        $gte: new Date().setDate(new Date().getDate() + 1)
      }
    })
    res.send({
      data: data
    })
  } catch (err) {
    res.status(400).send({ err: err })
  }
}

exports.getRemindersPrevious = async (req, res) => {
  try {
    const data = await Reminder.find({
      customer: new ObjectId((req.customer._id).toString()),
      createdAt: {
        $lte: new Date().setDate(new Date().getDate() - 1)
      }
    })
    res.send({
      data: data
    })
  } catch (err) {
    res.status(400).send({ err: err })
  }
}
