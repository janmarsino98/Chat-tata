const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')

const app = express()
app.use(cors({
    origin :process.env.FRONTED_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 5000

app.get('/',(request,response) =>{
    response.json({
        message : "Server funcionando en " + PORT
    })
})

app.use('/api',router)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server funcionando en " + PORT)
    })
})