const express = require('express')

const router = express.Router()

//gets user avalibilty
router.get('/', (req, res) => {
    res.json({mssg: 'avalibilty obtained'})
})

//post user availibilty
router.post('/', async (req, res) => {
    const {start, end} = req.body
    try {
        const availibilty = await Availibility.create({start, end})
        res.status(200).json(availibilty)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//update user avalibilty
router.patch('/:id', (req,res) => {
    res.json({mssg: 'user availibilty updated'})
})

module.exports =router