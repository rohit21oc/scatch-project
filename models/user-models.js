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
    isadmin:Boolean,
    orders:{
        type:array,
        default:[],
    },
    contact:Number,
    picture:String,
});

module.exports = mongoose.model("user",userSchema);