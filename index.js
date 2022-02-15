const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const contactRoute = require("./routes/automatisation")
dotenv.config()

//Connection with DB 
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch(() =>console.log('Connected to MongoDB échouée !'));


app.use(express.json())

app.use("/api/automatisation", contactRoute)  



app.listen(5000, ()=>{
    console.log("Backend sever is running")
})