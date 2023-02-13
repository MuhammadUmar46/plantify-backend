const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        signup:{
            type:String,
            required:true
        },
        login:{
            type:String,
            required:true,

        }
    })
    module.exports = mongoose.model("The User Schema is",UserSchema);
