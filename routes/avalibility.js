const express = require('express')
const {
    createAvalibility,
    getAvalibilities,
    getAvalibility,
    deleteAvalibility,
    updateAvalibility,
} = require('../controllers/availibilityController')


const router = express.Router()

//gets user avalibilty
router.get('/', getAvalibilities)

//get user avalibility by id
router.get('/:id', getAvalibility)

//post user availibilty
router.post('/', createAvalibility)

//delete user avalibility
router.delete('/:id', deleteAvalibility)

//update user avalibilty
router.patch('/:id', updateAvalibility)

module.exports = router