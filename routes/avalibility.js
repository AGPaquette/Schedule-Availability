const express = require('express')

const router = express.Router()

//gets user avalibilty
router.get('/', (req, res) => {
    res.json({mssg: 'avalibilty obtained'})
})

//post user availibilty
router.post('/', (req, res) => {
    res.json({mssg: 'post the user avalibilty'})
})

//update user avalibilty
router.patch('/:id', (req,res) => {
    res.json({mssg: 'user availibilty updated'})
})

module.exports =router