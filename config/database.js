const mongoose = require("mongoose");

require("dotenv").config();

const connectwithDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log('connection db is successfull'))
    .catch((error)=>{
        console.log("problem in connection of db");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectwithDB;