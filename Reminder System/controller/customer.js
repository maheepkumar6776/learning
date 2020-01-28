const Customer = require('../model/Customer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
  try {
    const customer = await Customer.create(req.body)
    const token = sendJsonwebToen(customer)
    res.status(201).json({
      success: true,
      data: customer,
      token: token
    })
  } catch (err) {
    res.status(400).send({ err: err })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  console.log(email)
  try {
    const customer = await Customer.findOne({ email }).select('+password')
    console.log(customer)     
    const isMatch = await bcrypt.compare(password, customer.password)
    if (!isMatch) {
      res.status(400).send({
        err: 'password not match'
      })
    }
    const token = sendJsonwebToen(customer)
    console.log('token', token)
    res.status(200).send({
      success: true,
      data: customer,
      token: token
    })
  } catch (err) {
    res.status(400).send({ err: err })
  }
}

// exports.getMe = async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(400).send({ err: err })
//   }
// }

const sendJsonwebToen = (customer) => {
  const token = jwt.sign({
    id: customer._id
  }, 'mysecretkey')
  return token
}
