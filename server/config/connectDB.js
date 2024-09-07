const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        const connection = mongoose.connection

        connection.on('conectado',()=>{
            console.log("Conecta la DB")
        })

        connection.on('error',(error)=>{
            console.log("Algo esta mal con mongodb",error)
        })
    } catch (error) {
        console.log("Algo esta mal",error)
    }
}

module.exports = connectDB