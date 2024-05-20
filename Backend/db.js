const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/ServiceIT";

const connect = ()=>{
    mongoose.connect(uri);
        console.log("connected to db successfully");
}

module.exports = connect;