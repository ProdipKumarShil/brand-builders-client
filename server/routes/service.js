const router = require('express').Router()
const Service = require('../models/service.model')

router.get('/services', async(req, res) => {
  try {
    const services = await Service.find()
    res.status(200).send({count: services.length, services})
  } catch (error) {
    res.status(500).send({status: false, message: error.message})
  }
})

router.post('/service', async(req, res) => {
  try{
    const newService = req.body
    const result = new Service(newService)
    await result.save()
    res.status(201).send({status: true, message: 'Service Booked!'})
  } catch (error){
    res.send(500).send({status: false, message: 'Failed to booking service!'})
  }
})

router.patch('/service/:email', async(req, res) => {
  try{
    const email = req.params.email
    const updateData = req.body.status
    console.log(email)
    console.log(updateData)
    const result = await Service.findOneAndUpdate({email: email}, {status: updateData})
    console.log(result)
    res.status(200).send({status: true, message: 'Successfully updated'})
  } catch (err) {
    res.status(200).send({status: false, message: 'Something went wrong!'})
  }
})

module.exports = router