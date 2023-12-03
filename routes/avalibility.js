const express = require('express')
const {
    createAvalibility
} = require('../controllers/availibilityController')

const router = express.Router()

//gets user avalibilty
router.get('/', (req, res) => {
    res.json({mssg: 'avalibilty obtained'})
})

//post user availibilty
router.post('/', createAvalibility)

//update user avalibilty
router.patch('/:id', (req,res) => {
    res.json({mssg: 'user availibilty updated'})
})

module.exports =router