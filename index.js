const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const cors = require('cors');



//middlewares
app.use(express.json());
app.use(cors());



//routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGOOSE_URI)
        app.listen(port, () => console.log(`Server is running at ${port}...`));
    } catch (err) {
        console.log(err);
    }
};

start();