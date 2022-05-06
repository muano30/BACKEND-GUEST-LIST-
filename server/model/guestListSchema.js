const mongoose = require("mongoose")

const guestList = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },food:[{
        type: String,
        require: true
    }],
    time:{
        type: Number,
        require: true
    },
    coming:{
        type: Boolean,
        default: false,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('guest', guestList)