const mongoose = require('mongoose')
require("dotenv").config();

const connectDB = (url) => {
    mongoose.connect(url, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;