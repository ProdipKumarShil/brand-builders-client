const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  message: { type: String, require: true },
  service: { type: String, require: true },
  status: { type: String, require: true },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Service", serviceSchema)
