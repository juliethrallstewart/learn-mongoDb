const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true //always set name to true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

//we use the model function because when we export and import we can interact with the schema
module.exports = mongoose.model('subscriber', subscriberSchema)