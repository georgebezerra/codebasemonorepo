import mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/twitter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
