const Availibility = require('../models/AvailibilityTime')

//get all availibility


//get one availibility


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
    createAvalibility
}