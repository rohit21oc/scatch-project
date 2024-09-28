const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:3,
    },
    email:String,
    password:String,
    card:{
        type:Array,
        default:[],
    },
    products:{
        type:array,
        default:[],
    },
    picture:String,
    gstnumber:Number,
});

module.exports = mongoose.model("owner",userSchema);