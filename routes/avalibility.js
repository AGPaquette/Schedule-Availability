const express = require('express')
const {
    createAvalibility,
    getAvalibilities,
    getAvalibility
} = require('../controllers/availibilityController')

const router = express.Router()

//gets user avalibilty
router.get('/', getAvalibilities)

//get user avalibility by id
router.get('/:id', getAvalibility)

//post user availibilty
router.post('/', createAvalibility)

//update user avalibilty
router.patch('/:id', (req,res) => {
    res.json({mssg: 'user availibilty updated'})
})

module.exports =router