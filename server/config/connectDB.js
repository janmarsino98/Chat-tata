const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://patata:admin123@chat-tata.8qz4f.mongodb.net/?retryWrites=true&w=majority&appName=chat-tata", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Conectado a la base de datos");
        });

        connection.on('error', (error) => {
            console.log("MONGO URI: ", process.env.MONGODB_URI);
            console.log("Algo está mal con MongoDB", error);
        });
    } catch (error) {
        console.log("MONGO URI: ", process.env.MONGODB_URI);
        console.log("Algo está mal", error);
    }
}

module.exports = connectDB;
