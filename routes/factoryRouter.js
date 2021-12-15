const express = require('express')
const router = express.Router()
const FactoryController = require('../controller/factoryController')
const auth = require('../middleware/auth')

// GET
router.get('/getAll', auth(), FactoryController.getAll)
router.get('/getById/:id', auth(), FactoryController.getById)
router.get('/getByName/:factory_name', auth(), FactoryController.getByName)
router.get('/getByMembershipDateRange/:membership_date/:membership_expiry_date', auth(), FactoryController.getByMembershipDateRange)
router.get('/getByMembershipDate', auth(), FactoryController.getByMembershipDate)
router.get('/getByMembershipExpiryDate', auth(), FactoryController.getByMembershipExpiryDate)

// POST
router.post('/add', auth(), FactoryController.add)

// PUT
router.put('/update/:id', auth(), FactoryController.update)

// DELETE
router.delete('/delete/:id', auth(), FactoryController.delete)

module.exports = router