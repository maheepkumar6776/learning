const mongoose = require('mongoose')
try {
  mongoose.connect('mongodb://localhost/nvest', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} catch (err) {
  console.log('mongo connection errro', err)
}
