import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import  cors from 'cors';
import dotenv from  "dotenv";

import  postRoutes from "./routes/post.js"

const app = express();
dotenv.config();


// TODO:check what is config means
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

//middleware
app.use('/posts', postRoutes)

const PORT = process.env.PORT;
 // ADD PORT IS LOCAL

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port :${PORT}`)))
    .catch((error)=>console.log(error));

mongoose.set('useFindAndModify', false) // its does not get warnings  to console


