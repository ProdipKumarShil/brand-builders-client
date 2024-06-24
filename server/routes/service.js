const router = require('express').Router()
const Service = require('../models/service.model')

router.get('/services', async(req, res) => {
  try {
    const services = await Service.find()
    res.status(200).send(services)
  } catch (error) {
    res.status(500).send({status: false, message: error.message})
  }
})

module.exports = router
