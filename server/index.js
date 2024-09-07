const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')

const app = express()

// Enhance CORS configuration
app.use(cors({
    origin: "http://localhost:3000",  // Frontend URL from .env (http://localhost:3000)
    credentials: true,  // Allow credentials (cookies, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow necessary HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Specify allowed headers
    preflightContinue: false,
    optionsSuccessStatus: 204  // Some browsers (e.g. IE11) require 204 for OPTIONS success
}));

// Middleware to parse incoming requests
app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 5000

app.get('/', (request, response) => {
    response.json({
        message: "Server funcionando en " + PORT
    })
})

// Use your API routes
app.use('/api', router)

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server funcionando en " + PORT)
    })
}).catch((err) => {
    console.error("Error connecting to the database", err);
})
