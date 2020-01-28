const express = require('express')
const customerRouter = require('./routes/customer')
const reminderRouter = require('./routes/reminder')

const app = express()
require('./config/db')
app.use(express.json())

// routes

app.use('/customer', customerRouter)
app.use('/reminder', reminderRouter)
const port = 5000

app.listen(port, () => {
  return console.log(`server is listening on ${port}`)
})
