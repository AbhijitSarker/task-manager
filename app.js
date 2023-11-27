const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()

//middlewares

app.use(express.json());



//routes
app.get('/', (req, res, next) => {
    res.send('Task Manager App');
})


app.use('/api/v1/tasks', tasks);



const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGOOSE_URI)
        app.listen(port, () => console.log(`Server is running at ${port}...`));
    } catch (err) {
        console.log(err);
    }
};

start();