const express = require("express");
const app = express();

// app.listen(3000 , ()=>{
//     console.log('app is running successfully ');
// })

// app.get("/", (req , res)=>{
//     res.send(`<h1> this is home page by rahul </h1>`);
// })

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middlerware
app.use(express.json());

const blog = require("./routers/blog");
//mount
app.use("/api/v1" , blog);

const connectwithDB = require("./config/database");
connectwithDB();

// start the server
app.listen(PORT , ()=>{
   console.log(`app is started at port ${PORT}`);
})

app.get("/" , (req , res)=>{
    res.send("APP is running successfully by rahulll");
})