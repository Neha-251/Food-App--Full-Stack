const mongoose = require("mongoose");


const connect = () => {
    return mongoose.connect("mongodb+srv://netmed:netmed@cluster0.ro7ke.mongodb.net/test");
} 

module.exports = connect;