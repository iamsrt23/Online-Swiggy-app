const express = require('express');
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const vendorRoutes = require('./routes/vendorRoutes')
const bodyParser = require('body-parser')
const firmRoutes = require('./routes/firmRoutes')

const app = express()
const PORT = 4000;

// Connecting to Database
dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB connected suceessfully"))
    .catch((error)=>console.log(error))


// middle ware
app.use(bodyParser.json())
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);


app.listen(PORT,()=>{console.log(`server started and running at ${PORT}`)})

// Create a Route
app.use('/home',(req,res)=>{
    res.send("<h1> Welcome to SWIGGY");
})