const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const serviceRoute = require('./routes/service')

mongoose.connect("mongodb://localhost:27017/brandBuildersDB")
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome from "Brand Builders Solution🚀🚀"')
})

app.use('/service', serviceRoute)

app.listen(PORT, () => {
  console.log('Server is running on ', PORT)
})
