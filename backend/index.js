const express = require('express');
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const vendorRoutes = require('./routes/vendorRoutes')
const bodyParser = require('body-parser')
const firmRoutes = require('./routes/firmRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000;

// Connecting to Database
dotEnv.config();
// CORS setup
const corsOptions = {
    // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  };
  app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB connected suceessfully"))
    .catch((error)=>console.log(error))


// middle ware

app.use(bodyParser.json())
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes)
app.use('/uploads',express.static('uploads'))//here we put folder name


app.listen(PORT,()=>{console.log(`server started and running at ${PORT}`)})

// Create a Route
app.use('/home',(req,res)=>{
    res.send("<h1> Welcome to SWIGGY");
})