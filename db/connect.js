const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        // useFindAndModifyIndex: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;