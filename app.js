const express = require('express');
const app = express();



//routes
app.get('/', (req, res, next) => {
    res.send('Task Manager App');
})

const port = 3000;


app.listen(port, console.log(`Server is running at ${port}...`));
