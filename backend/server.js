// server file
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require('./routes/UserRoutes');
const empRoutes = require('./routes/EmpRoutes');
const cors = require('cors');
app.use(cors());

const app = express();
const v1api = express();

const SERVER_PORT = 3031;

// Call the connectDB function to establish the MongoDB connection
connectDB(); 

// Use the routes directly without the /api/v1 prefix
v1api.use('/emp', empRoutes);
v1api.use('/user', userRoutes);

// Use '/' for the root of your application
app.use('/', v1api);

// Root endpoint response
app.route("/").get((req, res) => {
    res.send("<h1>COMP3123 - Assignment 1</h1>");
});

// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
