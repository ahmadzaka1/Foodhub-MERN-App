const mongoose = require('mongoose')

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        reuired: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', userSchema)
