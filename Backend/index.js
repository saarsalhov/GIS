const express = require('express'),
    app = express(),
    cors = require('cors');
require('dotenv').config();
// make server object that contain port property and the value for our server.
const server = {
    port: 8888,
};

// routers
const usersRouter = require('./routes/users');

// use the modules
app.use(cors());
app.use(express.json());


app.use('/users', usersRouter);

// starting the server
app.listen(server.port, () =>
    console.log(`Server started, listening port: ${server.port}`));
