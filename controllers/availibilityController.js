const { response } = require('express')
const Availibility = require('../models/AvailibilityTime')
const { default: mongoose } = require('mongoose')

//get all availibility
const getAvalibilities = async (req, res) => {
    const availibility = await Availibility.find()

    res.status(200).json(availibility)
}


//get one availibility
const getAvalibility = async (req, res) => {
    const { id } = req.params

    const availibility = await Availibility.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No avalibility'})
    }

    if (!availibility) {
        return res.status(400).json({error: 'availibilty does not exist'})
    }
    
    res.status(200).json(availibility)
}

//create new avalibility
const createAvalibility = async (req, res) => {
    const {start, end} = req.body

//adds documment to databse
    try {
        const availibility = await Availibility.create({start, end})
        res.status(200).json(availibility)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//delete avalibility


//update avalibility


module.exports = {
    createAvalibility,
    getAvalibilities,
    getAvalibility,
}