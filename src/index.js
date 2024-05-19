// // require('dotenv').config({path:'./env'})
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constant.js"
// import dbConnect from "./dB/index.js"
// import express from "express"
// const app = express();
// dotenv.config({
//     path:"./env"
// })



// // dbConnect()



// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./dB/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at the port ${process.env.PORT}`)
    })
})
.catch((err)=>{console.log("MONGODB CONNECTION FAILED",err)})











/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/