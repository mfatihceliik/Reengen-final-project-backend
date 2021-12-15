const express = require('express')
const router = express.Router()
const FactoryDetailController = require('../controller/factoryDetailController')
const auth = require('../middleware/auth')

// GET
router.get('/getAll', auth(), FactoryDetailController.getAll)
router.get('/getById/:id', auth(), FactoryDetailController.getById)
router.get('/getByFactoryId/:id', auth(), FactoryDetailController.getByFactoryId)
router.get('/getByDateRange/:start_date/:end_date', auth(), FactoryDetailController.getByDateRange)

// POST
router.post('/add', auth(), FactoryDetailController.add)

// PUT
router.put('/update/:id', auth(), FactoryDetailController.update)

// DELETE
router.delete('/delete/:id', auth(), FactoryDetailController.delete)

module.exports = router