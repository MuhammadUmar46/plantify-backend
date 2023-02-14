const mongoose = require('mongoose');

const ProductSchema =  new mongoose.Schema({
title:{
    type:String,
    required:true,
    trim:true
},
slug:{
    type:String,
    required:true,
    unique:false,
    lowercase:true,
},
description:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
},
brand:{
    type:String,
    enum:['HP','Radeon','Dell']
},
quantity:{
    type:Number,
    required:true
},
sold:{
    type:Number,
    default:0
},
images:{
    type:Array,
},
color:{
    type:String,
    enum:['White','MetallicGray','Black']
},
ratings:[{
    star:Number,
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
}]


},{timestamps:true})
module.exports = mongoose.model("Product Schema",ProductSchema);