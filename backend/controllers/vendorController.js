const Vendor = require('../models/Vendor')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotEnv = require('dotenv')

dotEnv.config()

const secretKey = process.env.WhatIsYourName

// Creating Vendor Registration
const vendorRegister = async(req,res)=>{
    // taken the email password and username from body what we enter
    const {username,email,password} = req.body
    // check the email is exist or not
    try{
        const vendorEmail = await Vendor.findOne({email})
        if(vendorEmail){
            return res.status(400).json("Email already taken")
        }
        // we hashed the password
        const hashPassword = await bcrypt.hash(password,10)

        const newVendor = new Vendor({
            username,
            email,
            password:hashPassword 
        })
        await newVendor.save();
        res.status(201).json({message: "Vendor registered Successfully"})
        console.log('Registered')

    }catch{error}{
        console.error(error);
        res.status(500).json({error:"Internal Server Error"})
    }

}

// Creating Vendor Login

const vendorLogin = async(req,res)=>{
    const {email,password} = req.body


    try{
        const vendor = await Vendor.findOne({email})
        if(!vendor || !(await bcrypt.compare(password, vendor.password))){
            return res.status(401).json({error:"Invalid Username or Password"})

        }

        // Jwt Token Creation
        // we assign jwt based on vendor id ,secretkey,time to expire for token
        const token = jwt.sign({vendorId:vendor._id},secretKey,{expiresIn: "24h"})




        res.status(200).json({suceess:"Login Successfully",token})
        console.log(email,"this is token",token)


    }catch(error){
        console.error(error);
        res.status(500).json({error:"Internal Server Error"})
    }
}

module.exports = {vendorRegister,vendorLogin}