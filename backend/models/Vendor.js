const mongoose = require("mongoose")


// Here We create a schema type and required(is mandatory to enter)

const vendorSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    firm:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Firm'
        }
    ]
})

const Vendor = mongoose.model('Vendor',vendorSchema);

module.exports = Vendor