const jwt = require('jsonwebtoken')
const Customer = require('../model/Customer')

exports.protect = async (req, res, next) => {
  let token
  try {
    if (req.headers.authentication && req.headers.authentication.startsWith('Bearer')) {
      token = req.headers.authentication.split(' ')[1]
    }
    const decoded = jwt.verify(token, 'mysecretkey')
    console.log(decoded)
    const customer = await Customer.findById(decoded.id)
    req.customer = customer
    next()
  } catch (err) {
    res.status(400).send({
      err: 'token is incorrect'
    })
  }
}
