const mongoose = require("mongoose");


const connect = () => {
    return mongoose.connect("mongodb+srv://nehasen:neha251@cluster0.gsuephp.mongodb.net/?retryWrites=true&w=majority");
} 

module.exports = connect;