const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//default times are set in min in this deafult 
const AvailabiltyTimeSchema = new Schema({
    Monday: {
        Type: {
            start: Number,
            end: Number
        },
        require: true
        
    },

    Tuesday: {
        Type: {
            start: Number,
            end: Number
        },
        require: true
    },

    Wednesday: {
        Type: {
            start: Number,
            end: Number
        },
        default: { start: 420, end: 990 },
        require: true
    },

    Thursday: {
        Type: {
            start: Number,
            end: Number
        },
        default: { start: 420, end: 990 },
        require: true
    },

    Friday: {
        Type: {
            start: Number,
            end: Number
        },
        default: { start: 420, end: 990 },
        require: true
    },

    Saturday: {
        Type: {
            start: Number,
            end: Number
        },
        default: { start: 420, end: 990 },
        require: true
    }, 

    Sunday: {
        Type: Number,
        require: true
    },        Type: {
            start: Number,
            end: Number
        },
        default: { start: 420, end: 990 },
        require: true
});

module.exports = mongoose.model('Availibility', AvailabiltyTimeSchema);


