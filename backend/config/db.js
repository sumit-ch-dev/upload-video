const mongoose = require('mongoose');


const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/video-database';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI, {
            // These are just to get rid of warnings in the console
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;