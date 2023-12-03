const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require('./routes/UserRoutes');
const empRoutes = require('./routes/EmpRoutes');

const app = express();
const v1api = express();

const SERVER_PORT = 3031;

// Call the connectDB function to establish the MongoDB connection
connectDB();  // This function should use the correct connection string with the MongoDB service name

v1api.use('/emp', empRoutes);
v1api.use('/user', userRoutes);
app.use('/api/v1', v1api);

// http://mongodb:27017/
app.route("/").get((req, res) => {
    res.send("<h1>COMP3123 - Assignment 1</h1>");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
