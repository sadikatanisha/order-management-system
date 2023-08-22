const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        //mongodb conection string
        const con = await mongoose.connect(process.env.DB_STRING)
        console.log(`Mongodb connected: ${con.connection.host}`)

    }catch(err){
        console.error(err)

    }
}

module.exports = connectDB