const express = require('express')
const {
    createAvalibility,
    getAvalibility,
} = require('../controllers/availibilityController')

const router = express.Router()

//gets user avalibilty
router.get('/', getAvalibility)
//post user availibilty
router.post('/', createAvalibility)

//update user avalibilty
router.patch('/:id', (req,res) => {
    res.json({mssg: 'user availibilty updated'})
})

module.exports =router