// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://mongodb:27017/mongodb-3123', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add other options if needed
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process on connection failure
    }
};

module.exports = connectDB;
